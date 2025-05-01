"use client";

import SignOutButton from "../signout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { NavigationMenu } from "../ui/navigation-menu";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import { useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const { isLoading, user, token } = useSession();
  console.log("isLoading:", isLoading);
  useEffect(() => {
    if (isLoading) return;
    console.log("User:", user);
    console.log("Token:", token);
  }, [isLoading]);

  const session = user && token ? { user, token } : null;

  return (
    <header className="h-16 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-10">
      <div className="flex h-16 items-center justify-between py-6 w-full max-w-screen-xl mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={50}
              className="h-full"
            />
          </Link>
        </div>
        <NavigationMenu className="hidden  md:block">
          <NavigationMenuList>
            <div className="md:flex gap-5">
              <div className="flex gap-5 pr-5 items-center">
                <Link href="/survey">
                  <h1 className=" font-bold ">Explore</h1>
                </Link>
                <Link href="#">
                  <h1 className=" font-bold ">Companies</h1>
                </Link>
                <Link href="#">
                  <h1 className=" font-bold ">Jobs</h1>
                </Link>
              </div>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2 hidden md:flex items-center">
          {pathname === "/" && (
            <Link href={"/explore"}>
              <Button className="font-semibold">Get Started</Button>
            </Link>
          )}
          {session == null ? (
            <Button
              type="submit"
              variant="outline"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button>
          ) : (
            <SignOutButton />
          )}
        </div>
        <div className="flex gap-2 md:hidden items-center">
          <Link href="/">Trigger</Link>
        </div>
      </div>
    </header>
  );
}
