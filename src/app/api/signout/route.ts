import { destroyCookie } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = destroyCookie();
  res.setHeader("Set-Cookie", cookie);
  res.status(200).json({ message: "Signed out" });
}
