import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = request.headers
    .get("cookie")
    ?.match(/session-token=([^;]+)/)?.[1];

  console.log("cooie:", request.headers.get("cookie"));
  if (!session) {
    return NextResponse.json({ user: null, token: null }, { status: 401 });
  }

  const payload = await verifyToken(session);
  if (!payload) {
    return NextResponse.json({ user: null, token: null }, { status: 401 });
  }

  return NextResponse.json({ user: payload.user, token: payload.token });
}
