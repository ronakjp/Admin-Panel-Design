import { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (width <= 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [width]);

  return (
    <>
      <div className="min-h-screen w-full bg-background">
        <Header
          handleSideMenuToggle={handleToggle}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="flex flex-row">
          <div
            className={`inline-block rounded-e-lg  bg-white shadow-gray-800`}
          >
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
          <div className="flex-[1] w-full h-full bg-background ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
