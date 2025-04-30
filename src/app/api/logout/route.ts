import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/lib/constants";

export async function POST() {
  // Clear session cookie
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: "",
    path: "/",
    maxAge: 0,
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
