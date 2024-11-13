import React, { ReactNode } from "react";

interface GridContainerProps {
  height?: string; // Optional custom height
  columns?: string; // Custom number of columns
  gap?: string; // Custom gap size
  className?: string; // Additional classes for customization
  children: ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({
  height = "h-auto", // Default to auto height
  columns = "grid-cols-1", // Default to a single column
  gap = "gap-4", // Default gap of 4
  className = "", // Default empty, for additional custom styles
  children,
}) => {
  return (
    <div className={`grid p-1 ${columns} ${gap} ${height} ${className}`}>
      {children}
    </div>
  );
};

export default GridContainer;
