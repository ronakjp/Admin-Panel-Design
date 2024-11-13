import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`px-6 py-6 border border-gray-100 rounded-2xl bg-white shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
