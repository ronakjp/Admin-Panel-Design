import { useEffect, useState } from "react";
import { Container } from "../Container";
import Header from "../Header/Header";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
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
      {" "}
      <Header
        handleSideMenuToggle={handleToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
      <Container />
    </>
  );
};

export default Layout;
