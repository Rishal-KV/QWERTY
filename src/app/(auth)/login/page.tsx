"use client";

import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Login} from "@/app/actions/auth";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function LoginPage() {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const form = new FormData();

		form.append("email", formData.email);
		form.append("password", formData.password);

		const response = await Login(form);

		console.log(response);

		if (response.success) {
			alert(response.message);
			router.push("/feed");
		} else {
			alert(response.message);
		}
	};

	return (
		<div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-md shadow-xl rounded-3xl border-none">
				<CardContent className="p-8">
					{/* Logo / App Name */}
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold text-slate-900">QWERTY</h1>
						<p className="text-slate-500 mt-2">
							Connect with friends around the world
						</p>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Email */}
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={handleChange}
								required
								className="h-11 rounded-xl"
							/>
						</div>

						{/* Password */}
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>

							<div className="relative">
								<Input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									value={formData.password}
									onChange={handleChange}
									required
									className="h-11 rounded-xl pr-12"
								/>

								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
								>
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</button>
							</div>
						</div>

						{/* Forgot Password */}
						<div className="text-right">
							<button
								type="button"
								className="text-sm text-blue-600 hover:underline"
							>
								Forgot password?
							</button>
						</div>

						{/* Login Button */}
						<Button type="submit" className="w-full h-11 rounded-xl text-base">
							Login
						</Button>
					</form>

					{/* Sign Up */}
					<div className="text-center mt-6 text-sm text-slate-600">
						Don&apos;t have an account?{" "}
						<Link href="/register">
							<span className="text-blue-600 font-medium hover:underline cursor-pointer">
								Sign up
							</span>
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
