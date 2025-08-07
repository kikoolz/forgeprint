import Link from "next/link";
import type { NavLinkProps } from "@/app/types";

export default function NavLink({
  href,
  children,
  isActive = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm uppercase px-4 transition-colors rounded-md cursor-pointer ${
        isActive ? "text-amber-600" : "text-gray-500 hover:text-amber-600"
      }`}
    >
      {children}
    </Link>
  );
}
