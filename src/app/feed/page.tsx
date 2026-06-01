"use client";

import {LeftSideBar} from "@/components/globals/leftSideBar";
import {RightSideBar} from "@/components/globals/rightSideBar";
import {PostCard} from "@/components/globals/postCard";

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
				<LeftSideBar />

				{/* Feed */}
				<main className="space-y-6 lg:col-span-6">
					{posts.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</main>

				{/* Right Profile */}
				<RightSideBar />
			</div>
		</div>
	);
}
