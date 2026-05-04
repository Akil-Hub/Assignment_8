import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return NextResponse.next();
  }


  const loginUrl = new URL('/login',request.url)
  loginUrl.searchParams.set('message','Login first to see profile and cow details page')
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/profile", "/cows/:id"],
};

