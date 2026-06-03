"use server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers";
import {connectDB} from "@/lib/mongodb";
import {User} from "@/models/users.model";

export async function Login(formData: FormData) {
	try {
		await connectDB();

		const email = formData.get("email") as string;

		const password = formData.get("password") as string;

		if (!email || !password) {
			return {
				success: false,
				message: "All fields are required",
			};
		}

		const user = await User.findOne({
			email,
		});

		if (!user) {
			return {
				success: false,
				message: "Invalid credentials",
			};
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			return {
				success: false,
				message: "Invalid credentials",
			};
		}

		// Create JWT
		const token = jwt.sign(
			{
				id: user._id,
				email: user.email,
			},
			process.env.JWT_SECRET!,
			{
				expiresIn: "7d",
			},
		);

		// Store in cookie
		(await cookies()).set("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
			path: "/",
		});

		return {
			success: true,
			message: "Login successful",
		};
	} catch (error) {
		console.log(error);

		return {
			success: false,
			message: "Something went wrong",
		};
	}
}

export async function Register(formData: FormData) {
	try {
		await connectDB();

		const name = formData.get("name") as string;

		const email = formData.get("email") as string;

		const password = formData.get("password") as string;

		// Validation
		if (!name?.trim() || !email?.trim() || !password?.trim()) {
			return {
				success: false,
				message: "All fields are required",
			};
		}

		// Check existing user
		const existingUser = await User.findOne({
			email,
		});

		if (existingUser) {
			return {
				success: false,
				message: "Email already exists",
			};
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create user
		const user = await User.create({
			userName: name.toLowerCase().replace(/\s+/g, ""),
			email,
			password: hashedPassword,
		});

		return {
			success: true,
			message: "Registration successful",
			user: {
				id: user._id.toString(),
				userName: user.userName,
				email: user.email,
			},
		};
	} catch (error) {
		console.error(error);

		return {
			success: false,
			message: "Something went wrong",
		};
	}
}
