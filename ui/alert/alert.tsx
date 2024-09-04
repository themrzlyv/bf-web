import React from "react";
import { Typography } from "ui/typography/typography";

type Props = {
  title?: string;
  description?: string | React.ReactNode;
  type: "success" | "error";
  icon?: React.ReactNode;
  containerClassName?: string;
};

export const Alert = ({
  title,
  description,
  type,
  icon,
  containerClassName,
}: Props) => {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-200";
  const color = type === "success" ? "success" : "danger";
  return (
    <div
      className={`flex flex-col p-3 rounded-md ${bgColor} ${containerClassName}`}
    >
      {title && (
        <Typography variant="small" color={color}>
          {title}
        </Typography>
      )}
      <div className="flex flex-row items-center gap-x-2">
        {icon && icon}
        <div>
          {typeof description === "string" ? (
            <Typography variant="small" color={color}>
              {description}
            </Typography>
          ) : (
            description
          )}
        </div>
      </div>
    </div>
  );
};
