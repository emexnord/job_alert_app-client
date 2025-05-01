"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <Button type="submit" variant="outline" onClick={handleSignOut}>
      Logout
    </Button>
  );
}
