export const RightSideBar = () => {
	return (
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
	);
};
