import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { serialize } from "cookie";
import { COOKIE_NAME, COOKIE_OPTIONS } from "./constants";

export async function createToken(payload: JWTPayload) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    console.log("Token to verify:", token);

    const { payload } = await jwtVerify(token, secret);
    console.log("Payload:", payload);

    return payload;
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
}

export function createCookie(token: string) {
  return serialize(COOKIE_NAME, token, COOKIE_OPTIONS);
}

export function destroyCookie() {
  return serialize(COOKIE_NAME, "", { ...COOKIE_OPTIONS, maxAge: 0 });
}

export async function signInWithBackend(
  email: string,
  password: string,
  apiUrl: string
) {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Failed to authenticate");
  }

  const { user, token } = await res.json();
  const sessionToken = await createToken({ user, token });
  return { sessionToken, user, token };
}
