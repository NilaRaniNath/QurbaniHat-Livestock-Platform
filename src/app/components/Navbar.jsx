"use client";
import { authClient } from "@/lib/auth.client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-4">
      
      <nav className="flex flex-col md:flex-row justify-between items-center py-4 max-w-7xl mx-auto w-full gap-4">
        
        
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-xl">QurbaniHat</h3>
        </div>

      
        <ul className="flex items-center gap-3 md:gap-5 text-xs md:text-sm overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
          <li>
            <Link href={"/"} className="border bg-red-400 text-white rounded-xl px-3 py-1 font-bold hover:bg-red-500 transition-all">Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"} className="border bg-red-400 text-white rounded-xl px-3 py-1 font-bold hover:bg-red-500 transition-all">All Animals</Link>
          </li>
          <li>
            <Link href={"/profile"} className="border bg-red-400 text-white rounded-xl px-3 py-1 font-bold hover:bg-red-500 transition-all">Profile</Link>
          </li>
        </ul>

       
        <div className="flex gap-4 items-center">
          {!user && (
            <ul className="flex items-center text-xs md:text-sm gap-2">
              <li>
                <Link href={"/register"} className="border bg-purple-400 text-white rounded-xl px-3 py-1 hover:bg-purple-500 transition-all">Register</Link>
              </li>
              <li>
                <Link href={"/signin"} className="border bg-purple-400 text-white rounded-xl px-3 py-1 hover:bg-purple-500 transition-all">SignIn</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar size="sm" className="cursor-pointer border-2 border-purple-200">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback className="bg-purple-100 text-purple-700 font-bold">
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button 
                onClick={handleSignOut} 
                size="sm" 
                className="bg-red-600 text-white font-bold rounded-xl px-4 hover:bg-red-700 transition-all shadow-sm"
              >
                SignOut
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;