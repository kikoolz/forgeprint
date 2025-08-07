"use client";

import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="relative cursor-pointer">
            {/* Desktop logo */}
            <Image
              src="/logo1.png"
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
              width={200}
              height={50}
            />
            {/* Mobile logo */}
            <Image
              src="/logo2.png"
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/3d-models" isActive={pathname === "/3d-models"}>
              3D Models
            </NavLink>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/about" isActive={pathname === "/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
