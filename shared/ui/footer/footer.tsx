"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { pagesForMenu } from "shared/data";

export const Footer = () => {
  const pathName = usePathname();

  if (!pagesForMenu.includes(pathName)) return null;

  return <div>Footer</div>;
};
