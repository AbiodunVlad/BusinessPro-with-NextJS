"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
// import { Cross1 } from "radix-ui/react-icons";
// import { Cross } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const isActive = (path: string) =>
    pathname === path ? "text-purple-600" : "";
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-6 border-b w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded"></div>
            <span className="font-medium">BusinessPro</span>
          </div>

          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </div>
        </div>

        <div
          className={`text-black gap-6 flex flex-col lg:flex-row items-center justify-between w-full  transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <nav className="flex-col lg:flex-row flex gap-6">
            <Link
              href="/home"
              className={`hover:text-purple-600 ${isActive("/home")}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-purple-600 ${isActive("/about")}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`hover:text-purple-600 ${isActive("/services")}`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`hover:text-purple-600 ${isActive("/contact")}`}
            >
              Contact
            </Link>
          </nav>

          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}
