import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="p-6 md:p-12 bg-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
              <span className="font-medium">BusinessPro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses to reach their full potential through
              strategic consulting and innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Strategy Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Digital Innovation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Growth Optimization
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@businesspro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business St, City</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
