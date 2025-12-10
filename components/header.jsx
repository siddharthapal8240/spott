import React from "react";
import Image from "next/image";
import Link from "next/link";
import {SignInButton,SignUpButton,SignedIn,SignedOut,UserButton} from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <Image
              src="/spott.png"
              alt="Spott logo"
              width={500}
              height={500}
              className="w-full h-11 priority"
            />
          </Link>
          {/* Search & Location -- Desktop only*/}

          {/* Right Side actions */}
          <div className="flex items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        {/* Mobile Search & Location */}
      </nav>

      {/* Modals */}
    </>
  );
};

export default Header;
