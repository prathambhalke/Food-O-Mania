"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: string }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path === href
          ? "text-red-700 bg-white text-black px-2 py-1 rounded-md font-bold shadow-yellow-400 shadow-xl"
          : ""}
    >
      {children}
    </Link>
  );
};

export default NavLink;
