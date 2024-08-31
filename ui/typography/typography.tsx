import { Roboto } from "next/font/google";
import React from "react";

type Props = {
  children: Readonly<React.ReactNode>;
  className?: string;
  variant?: "header" | "h1" | "h2" | "h3" | "p" | "small" | "large";
  color?: "secondary" | "primary" | "danger" | "success" | "warning" | "default";
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const Typography = ({
  children,
  className,
  variant = "p",
  color = "default",
}: Props) => {
  const variants = {
    header: "text-5xl font-bold",
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    large: "text-lg font-medium",
    p: "text-base font-default",
    small: "text-sm font-thin text-gray-500",
  };

  const colorClasses = {
    primary: "text-primary-default",
    secondary: "text-secondary-default",
    danger: "text-red-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    default: "text-black",
  };

  const classes = variants[variant] || variants.p;
  const colorClass = colorClasses[color] || "";

  return (
    <div
      className={`${roboto.className} ${classes} ${colorClass} ${className}`}
    >
      {children}
    </div>
  );
};
