import {
	Bookmark,
	Heart,
	MessageCircle,
	MoreHorizontal,
	Send,
} from "lucide-react";
import Image from "next/image";

interface PostCardProps {
	post: {
		id: string;
		name: string;
		username: string;
		image: string;
		likes: number;
		content: string;
		comments: number;
	};
}

export const PostCard = ({post}: PostCardProps) => {
	return (
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
				<Image src={post.image} alt="Post" fill className="object-cover" />
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
	);
};
