import { useState } from "react";
import CompanyLogo from "../../assets/company_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <header className="shadow-lg ">
      <div className="h-24 flex flex-row justify-between items-center">
        <div className="px-4 py-2">
          <a href="/" className="flex flex-row items-center ">
            <img
              className="h-24 w-24"
              src={CompanyLogo}
              alt="Comapany Logo"
            ></img>
            <span className="hidden font-light text-xl  md:block">Pheonix</span>
          </a>
        </div>

        <div className=" flex flex-row items-center px-4 py-2 mr-6">
          {/* Notification Icon  */}
          <div className="relative">
            <svg
              className="h-6 w-6 mr-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <span className="  absolute left-3 top-0 bg-primary w-2.5 h-2.5 rounded-full border border-white "></span>

            <div
              className={`absolute right-6 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-background ring-opacity-5 focus:outline-none  transition transform duration-300 ease-out ${
                isNotificationOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm break-words"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-0"
              >
                Notification
              </a>
            </div>
          </div>
          {/* Profile Avatar Right Side */}
          <div className="relative">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="profile image"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div
              className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-background ring-opacity-5 focus:outline-none  transition transform duration-300 ease-out ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-1"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm "
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-2"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
