import React from "react";
import { IconType } from "react-icons";

interface StatCardProps {
  icon: IconType;
  bgColor: string;
  borderColor: string;
  value: string | number;
  title: string;
  growth: number;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  bgColor,
  borderColor,
  value,
  title,
  growth,
}) => {
  return (
    <div
      className={`border ${borderColor} ${bgColor} rounded-2xl flex flex-col p-4 shadow-md w-full h-full`}
    >
      <h1 className="text-3xl">
        <div className={`inline-block ${bgColor} rounded-3xl p-1`}>
          <Icon />
        </div>
      </h1>
      <h2>{value}</h2>
      <h4>{title}</h4>
      <h6 className=" text-appPrimary">
        <span
          className={`font-bold ${growth >= 0 ? "text-green-600" : "text-red-600"}`}
        >
          {growth >= 0 ? "+" : ""}
          {growth}%
        </span>{" "}
        from yesterday
      </h6>
    </div>
  );
};

export default StatCard;
