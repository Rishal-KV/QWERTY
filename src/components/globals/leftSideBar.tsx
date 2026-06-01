import {Bell, Home, MessageSquare, Search} from "lucide-react";
export const LeftSideBar = () => {
	return (
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
	);
};
