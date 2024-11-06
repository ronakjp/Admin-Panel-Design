import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

function App() {
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
      <div className="h-svh max-h-svh w-full bg-background">
        <Header
          handleSideMenuToggle={handleToggle}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="flex flex-row">
          <div
            className={`inline-block h-screen rounded-e-lg  bg-white shadow-gray-800`}
          >
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
          <div className="flex-[1] w-full  h-screen  bg-background ">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
