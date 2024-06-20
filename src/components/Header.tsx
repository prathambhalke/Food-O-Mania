"use client";

import Image from "next/image";
import Link from "next/link";
import pizzaLogo from "../../public/assets/pizzaLogo.png";
import NavLink from "./NavLink";
const Header = () => {
  console.log("this is the client componenet!")
  return (
    <header className="bg-orange-400 text-white px-5 py-1 flex justify-between items-center">
      <Link href="/">
        <Image src={pizzaLogo} alt="Pizza logo image" width={80} height={80} />
      </Link>
      <nav className="w-full">
        <ul className="flex justify-end w-full">
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li className="ml-4">
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
