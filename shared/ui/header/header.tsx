"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { pagesForMenu } from "shared/data";

export const Header = () => {
  const pathName = usePathname();

  if (!pagesForMenu.includes(pathName)) return null;

  return (
    <nav>
      <div>header</div>
      <div>navbar</div>
    </nav>
  );
};
