import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineWidgets } from "react-icons/md";
import { LiaElementor } from "react-icons/lia";
import { CiViewTable } from "react-icons/ci";
import { HiOutlineChartSquareBar } from "react-icons/hi";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const menuItems = [
    { icon: <LuLayoutDashboard />, name: "Dashboard" },
    { icon: <MdOutlineWidgets />, name: "Widgets" },
    { icon: <LiaElementor />, name: "Elementor" },
    { icon: <CiViewTable />, name: "View Table" },
    { icon: <HiOutlineChartSquareBar />, name: "Charts" },
  ];

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

  return (
    <div className="p-1 h-full ">
      <ul
        className={` inline-block mt-3 transition-width duration-500 ease-in-out ${
          isSidebarOpen ? "w-60" : "w-20"
        }`}
      >
        {menuItems.map((eachMenu) => (
          <li className={`${eachSideBarMenuItemStyle}`}>
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
