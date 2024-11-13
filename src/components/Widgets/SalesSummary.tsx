import React from "react";
import { PiExportBold } from "react-icons/pi";
import StatCard from "../Common/StatCard";
import { IconType } from "react-icons";

interface StatData {
  icon: IconType;
  bgColor: string;
  borderColor: string;
  value: string;
  title: string;
  growth: number;
}

interface SalesSummaryProps {
  stats: StatData[];
  title?: string;
  subtitle?: string;
  showExport?: boolean;
}

const SalesSummary: React.FC<SalesSummaryProps> = ({
  stats,
  title = "Today's Sales",
  subtitle = "Sales Summary",
  showExport = true,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-8">
        <div className="flex flex-col">
          <h2>{title}</h2>
          <h4 className="text-gray-400">{subtitle}</h4>
        </div>
        {showExport && (
          <div className="btn-tertiary flex flex-row justify-center items-center">
            <div className="p-2 mr-0">
              <PiExportBold />
            </div>
            <button className="p-2">Export</button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center gap-x-5 gap-y-3 p-3">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            bgColor={stat.bgColor}
            borderColor={stat.borderColor}
            value={stat.value}
            title={stat.title}
            growth={stat.growth}
          />
        ))}
      </div>
    </>
  );
};

export default SalesSummary;
