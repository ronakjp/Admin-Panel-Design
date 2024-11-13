import React, { ReactNode } from "react";

interface Stat {
  label: string;
  value: string;
}

interface ChartCardProps {
  title: string;
  description: string;
  stats: Stat[];
  children: ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  stats,
  children,
}) => {
  return (
    <>
      {/* Title */}
      <h2>{title}</h2>

      {/* Description */}
      <h5 className="mb-8 ">{description}</h5>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 justify-start items-center ">
        {stats.map((stat, index) => (
          <div className="flex flex-col" key={index}>
            <h5 className="text-gray-400">{stat.label}</h5>
            <h2 className=" text-[#4b49ac]">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="">{children}</div>
    </>
  );
};

export default ChartCard;
