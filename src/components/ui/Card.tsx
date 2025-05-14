import React, { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}
const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
  hover = false,
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-5",
    lg: "p-8",
  };
  const hoverClass = hover ? "transition-shadow hover:shadow-md" : "";
  return (
    <div
      className={`bg-white rounded-lg shadow ${paddingClasses[padding]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
