"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-gray-900 text-2xl font-semibold">SolvMate</h2>
            <p className="text-sm text-gray-900">
              Your Growth Engine. Startup&apos;s Best Mate.
            </p>
            <p className="text-sm text-gray-900 leading-relaxed">
              Empowering startups with strategic consulting and innovative
              technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className=" text-gray-900 hover:text-cyan-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" text-gray-900 hover:text-cyan-500 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className=" text-gray-900 hover:text-cyan-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className=" text-gray-900 hover:text-cyan-500 transition"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-gray-900 text-lg font-medium">Products</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-900 hover:text-cyan-500 transition cursor-default">
                BlastMate
              </li>
              <li className="text-gray-900 hover:text-cyan-500 transition cursor-default">
                Hiremate.in
              </li>
              <li className="text-gray-900 hover:text-cyan-500 transition cursor-default">
                Kannakilabs
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-gray-900 text-lg font-medium">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-900">
              <li>Chennai, India</li>
              <li>+91 9962784977</li>
              <li>
                <a
                  href="mailto:hello@solvmate.in"
                  className="hover:text-white transition"
                >
                  hello@solvmate.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center text-sm text-gray-900">
          © 2024 SolvMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
