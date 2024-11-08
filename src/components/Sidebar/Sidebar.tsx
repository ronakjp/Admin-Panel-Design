import { LuLayoutDashboard } from "react-icons/lu";
import { CiViewTable } from "react-icons/ci";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const menuItems = [
    { icon: <LuLayoutDashboard />, name: "Dashboard", route: "dashboard" },

    { icon: <CiViewTable />, name: "View Table", route: "view-table" },
    { icon: <HiOutlineChartSquareBar />, name: "Charts", route: "charts" },
  ];
  const navigate = useNavigate();
  const eachSideBarMenuItemStyle = `flex 
  flex-row
  items-center
  m-4
  p-3
  rounded-xl
  hover:bg-primary
  hover:text-white
  transform
  duration-400
  ease-in-out
  hover:scale-110
  transition
  hover:translate-x-2
  font-light
  text-nowrap
  overflow-hidden
  hover:font-semibold
  `;
  const location = useLocation();

  useEffect(() => {
    console.log("location is ", location.pathname);
  }, [location]);

  return (
    <div className="p-1 h-full ">
      <ul
        className={` inline-block mt-3 transition-width duration-500 ease-in-out ${
          isSidebarOpen ? "w-60" : "w-20"
        }`}
      >
        {menuItems.map((eachMenu) => (
          <li
            className={`${eachSideBarMenuItemStyle} ${
              location.pathname === "/" + eachMenu.route
                ? "bg-primary text-white font-semibold"
                : ""
            }`}
            onClick={() => {
              navigate(eachMenu.route);
            }}
          >
            <span className="mr-4 ">
              <span className="text-xl ">{eachMenu.icon}</span>
            </span>
            <div>
              <span className=" text-base ">{eachMenu.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
