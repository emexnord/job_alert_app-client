import { createToken } from "@/lib/auth";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: NextApiResponse) {
  try {
    const { email, password } = await request.json();
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

    // const res = await fetch(apiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // if (!res.ok) {
    //   throw new Error("Failed to authenticate");
    // }

    // const { user, token } = await res.json();

    // Mock user and token for demonstration purposes
    const user = { id: 1, name: "John Doe", email };
    const token = "mock-token-1234567890";

    const sessionToken = await createToken({ user, token });

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: "session-token",
      value: sessionToken,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({ user, token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
