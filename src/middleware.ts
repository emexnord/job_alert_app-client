import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session-token")?.value;

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(url);
  }

  // Verify JWT
  const payload = await verifyToken(session);
  if (!payload) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /**
     * Match all paths except:
     * - root `/`
     * - `/login`
     * - static files (e.g. `/favicon.ico`, `/images/...`)
     * - API routes (optional)
     */
    "/((?!login|$|_next|favicon.ico|images|api).*)",
  ],
};
