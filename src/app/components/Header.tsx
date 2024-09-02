import { UserButton } from "@clerk/nextjs";
import React, { Component } from "react";

export const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6 bg-gray-100 border border-b-2 border-b-orange-400">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="tracking-tight text-black text-xl">Sippar</span>
        </div>
        <UserButton />
      </nav>
    </>
  );
};
