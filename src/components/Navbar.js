import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-4 bg-gray-800 p-4 justify-center">
          <Link href="/home" className="text-2xl font-bold text-white p-4">
            Home
          </Link>
          <Link href="/about" className="text-2xl font-bold text-white p-4">
            About
          </Link>
          <Link href="/contact" className="text-2xl font-bold text-white p-4">
            Contact
          </Link>
        </div>
  )
}

export default Navbar
