import React from "react";
import Link from "next/link";

const AuthNav = () => {
  return (
    <div className="flex gap-4 bg-gray-800 p-4 justify-center">
      <Link
        href="/authLayout/login"
        className="text-2xl font-bold text-white p-4"
      >
        Login
      </Link>
      <Link
        href="/authLayout/register"
        className="text-2xl font-bold text-white p-4"
      >
        Register
      </Link>
    </div>
  );
};

export default AuthNav;
