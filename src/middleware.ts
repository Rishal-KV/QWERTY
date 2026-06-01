import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("token")?.value;
	const pathname = request.nextUrl.pathname;

	const protectedRoutes = ["/feed", "/profile", "/settings"];

	const authRoutes = ["/login", "/signup"];

	const isProtectedRoute = protectedRoutes.some((route) =>
		pathname.startsWith(route),
	);

	// Not logged in → redirect
	if (isProtectedRoute && !token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// Already logged in → prevent login page access
	if (authRoutes.includes(pathname) && token) {
		return NextResponse.redirect(new URL("/feed", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/feed/:path*",
		"/profile/:path*",
		"/settings/:path*",
		"/login",
		"/signup",
	],
};
