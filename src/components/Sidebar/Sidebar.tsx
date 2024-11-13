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
 
  py-3
  px-2
 my-4
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
  text-center
  hover:font-semibold
  `;
  const location = useLocation();

  useEffect(() => {
    console.log("location is ", location.pathname);
  }, [location]);

  return (
    // <div
    //   className={`md:block p-1 h-full ${isSidebarOpen ? "block" : "hidden"}`}
    // >
    // <aside
    //   className={`${
    //     isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    //   } fixed lg:relative z-40 h-full w-64 bg-white p-6 transform transition-transform duration-300 mt-2 border border-red-800`}
    // >

    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 min-h-full z-40 w-64  h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full "
      } `}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <ul
          className={` inline-block transition-width duration-500 ease-in-out w-56 
           `}
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
                <span className=" text-base">{eachMenu.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
