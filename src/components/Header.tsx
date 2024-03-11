"use client";

import Image from "next/image";
import Link from "next/link";
import pizzaLogo from "../../public/assets/pizzaLogo.png";
const Header = () => {
  return (
    <header className="bg-orange-400 text-white px-5 py-1 flex justify-between items-center">
      <Link href="/">
        <Image src={pizzaLogo} alt="Pizza logo image" width={80} height={80}/>
      </Link>
      <nav className="w-full">
        <ul className="flex justify-end w-full">
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li className="ml-4">
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
