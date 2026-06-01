"use client";

import {useState} from "react";
import {Eye, EyeOff, Loader2} from "lucide-react";

import {Register} from "@/app/actions/auth";

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function RegisterPage() {
	const [showPassword, setShowPassword] = useState(false);

	const [loading, setLoading] = useState(false);

	const [message, setMessage] = useState("");

	const [formData, setFormData] = useState({
		name: "",
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

		setLoading(true);
		setMessage("");

		try {
			const form = new FormData();

			form.append("name", formData.name);

			form.append("email", formData.email);

			form.append("password", formData.password);

			const response = await Register(form);

			setMessage(response.message);

			if (response.success) {
				setFormData({
					name: "",
					email: "",
					password: "",
				});

				// router.push("/login")
			}
		} catch (error) {
			console.log(error);

			setMessage("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
			<Card className="w-full max-w-md rounded-3xl shadow-xl border-none">
				<CardContent className="p-8">
					<div className="mb-8 text-center">
						<h1 className="text-3xl font-bold">Create Account</h1>

						<p className="text-slate-500 mt-2">Join our social platform</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Name */}
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>

							<Input
								id="name"
								name="name"
								type="text"
								placeholder="Enter your name"
								value={formData.name}
								onChange={handleChange}
								required
								className="h-11 rounded-xl"
							/>
						</div>

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
									className="absolute right-3 top-1/2 -translate-y-1/2"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</button>
							</div>
						</div>

						{/* Message */}
						{message && (
							<p className="text-sm text-center text-red-500">{message}</p>
						)}

						{/* Button */}
						<Button
							type="submit"
							className="w-full h-11 rounded-xl"
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Registering...
								</>
							) : (
								"Register"
							)}
						</Button>
					</form>

					<p className="text-center text-sm text-slate-500 mt-6">
						Already have an account?{" "}
						<span className="text-blue-600 cursor-pointer hover:underline">
							Login
						</span>
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
