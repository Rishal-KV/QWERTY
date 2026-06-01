"use client";

import Image from "next/image";
import {
	Heart,
	MessageCircle,
	Send,
	Bookmark,
	MoreHorizontal,
	Home,
	Search,
	Bell,
	MessageSquare,
} from "lucide-react";

export default function SocialMediaLayout() {
	const posts = [
		{
			id: 1,
			name: "Sophia Carter",
			username: "@sophia",
			content: "Weekend vibes 🌴✨ Enjoying the beach and building cool UI.",
			image:
				"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
			likes: "2,431",
			comments: 142,
		},
		{
			id: 2,
			name: "Alex Johnson",
			username: "@alexj",
			content: "Learning Next.js Server Actions 🚀",
			image:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
			likes: "1,128",
			comments: 54,
		},
	];

	return (
		<div className="min-h-screen bg-neutral-100">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 lg:grid-cols-12">
				{/* Left Sidebar */}
				<aside className="sticky top-4 hidden h-fit rounded-3xl bg-white p-6 shadow-sm lg:col-span-3 lg:block">
					{" "}
					<h1 className="mb-8 text-3xl font-bold">QWERTY</h1>
					<nav className="space-y-3">
						{[
							{
								label: "Home",
								icon: Home,
							},
							{
								label: "Explore",
								icon: Search,
							},
							{
								label: "Messages",
								icon: MessageSquare,
							},
							{
								label: "Notifications",
								icon: Bell,
							},
						].map((item) => (
							<button
								key={item.label}
								className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-gray-100"
							>
								<item.icon className="h-5 w-5" />
								<span className="font-medium">{item.label}</span>
							</button>
						))}
					</nav>
				</aside>

				{/* Feed */}
				<main className="space-y-6 lg:col-span-6">
					{posts.map((post) => (
						<div
							key={post.id}
							className="overflow-hidden rounded-3xl bg-white shadow-sm"
						>
							{/* Header */}
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-white">
										{post.name[0]}
									</div>

									<div>
										<h3 className="font-semibold">{post.name}</h3>

										<p className="text-sm text-gray-500">{post.username}</p>
									</div>
								</div>

								<button>
									<MoreHorizontal />
								</button>
							</div>

							{/* Image */}
							<div className="relative aspect-square w-full">
								<Image
									src={post.image}
									alt="Post"
									fill
									className="object-cover"
								/>
							</div>

							{/* Actions */}
							<div className="p-4">
								<div className="flex items-center justify-between">
									<div className="flex gap-4">
										<button className="transition hover:scale-110">
											<Heart className="h-7 w-7" />
										</button>

										<button className="transition hover:scale-110">
											<MessageCircle className="h-7 w-7" />
										</button>

										<button className="transition hover:scale-110">
											<Send className="h-7 w-7" />
										</button>
									</div>

									<button className="transition hover:scale-110">
										<Bookmark className="h-7 w-7" />
									</button>
								</div>

								{/* Likes */}
								<p className="mt-4 font-semibold">{post.likes} likes</p>

								{/* Caption */}
								<p className="mt-2 text-sm">
									<span className="mr-2 font-semibold">{post.username}</span>

									{post.content}
								</p>

								{/* Comments */}
								<button className="mt-2 text-sm text-gray-500">
									View all {post.comments} comments
								</button>
							</div>
						</div>
					))}
				</main>

				{/* Right Profile */}
				<aside className="sticky top-4 hidden h-fit rounded-3xl bg-white p-6 shadow-sm lg:col-span-3 lg:block">
					{" "}
					<div className="flex flex-col items-center">
						<div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-3xl font-bold text-white">
							R
						</div>

						<h2 className="mt-4 text-xl font-bold">Rishal KV</h2>

						<p className="text-sm text-gray-500">Full Stack Developer</p>
					</div>
					<button className="mt-6 w-full rounded-2xl bg-black py-3 font-medium text-white">
						Edit Profile
					</button>
				</aside>
			</div>
		</div>
	);
}
