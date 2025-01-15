"use client";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img
        src="./menu.png"
        alt="menu"
        className="cursor-pointer"
        width={28}
        height={28}
        onClick={() => {
          setOpen((c) => !c);
        }}
      />

      {open && (
        <div className="absolute left-0 top-20 w-full h-[calc(100vh-80px)]  flex flex-col justify-center items-center gap-8 bg-black text-white z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart</Link>
        </div>
      )}
    </div>
  );
};
export default Menu;
