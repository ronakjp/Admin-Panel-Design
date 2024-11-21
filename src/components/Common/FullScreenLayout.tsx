import { Outlet } from "react-router-dom";

const FullScreenLayout = () => {
  return (
    <div className="md:w-screen md:h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default FullScreenLayout;
