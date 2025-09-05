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

          {/* <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </div> */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white h-96 z-50 flex flex-col p-6 lg:hidden">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="mb-4">
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 items-start">
              <Link
                href="/home"
                className={`hover:text-purple-600 ${isActive("/home")}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-purple-600 ${isActive("/about")}`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`hover:text-purple-600 ${isActive("/services")}`}
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`hover:text-purple-600 ${isActive("/contact")}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link href="/contact" onClick={toggleMenu}>
                <Button className="bg-purple-600 hover:bg-purple-700 mt-4">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop menu */}
        <div
          className={`text-black gap-10 flex flex-col lg:flex-row items-center justify-end w-full  transition-all duration-300 ${
            menuOpen ? "hidden" : "hidden lg:flex"
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
