import { NextResponse } from "next/server";
import { betterFetch } from "@better-fetch/fetch";

export async function proxy(request) {
  try {
    const { data: session } = await betterFetch("/api/auth/get-session", {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    });

    if (session?.user) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/register", request.url));
    
  } catch (error) {
    // ✅ if fetch fails, redirect to register
    console.error("Proxy auth error:", error);
    return NextResponse.redirect(new URL("/register", request.url));
  }
}

export const config = {
  matcher: ["/cows/:path*", "/profile"],
};