"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navColor = "bg-zinc-700"


  return (
    <div className="w-full flex justify-center items-center mt-6">
      <div className="bg-zinc-900 rounded-full p-2 flex w-[400px] lg:w-[600px] h-[56px] shadow-none justify-center transition-all duration-300">
        <Link
          className={`rounded-full w-1/2 h-[40px] flex items-center justify-center mx-2 transition-colors duration-200 cursor-pointer
            ${pathname === "/" ? "bg-zinc-600" : `${navColor} hover:bg-zinc-600`}
          `} href="/"
        >
          <span className="text-white text-lg font-medium">Home</span>
        </Link>
        <Link
          className={`rounded-full w-1/2 h-[40px] flex items-center justify-center mx-2 transition-colors duration-200 cursor-pointer
            ${pathname === "/habits" ? "bg-zinc-600" : `${navColor} hover:bg-zinc-600`}
          `} href="/habits"
        >
          <span className="text-white text-lg font-medium">Habits</span>
        </Link>
      </div>
    </div>
  );
}
