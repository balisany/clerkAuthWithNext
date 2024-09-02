import { UserButton } from "@clerk/nextjs";
import React, { Component } from "react";

export const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="tracking-tight text-black text-xl">Sippar</span>
        </div>
        <UserButton />
      </nav>
    </>
  );
};
