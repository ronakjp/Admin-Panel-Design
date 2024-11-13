import { Outlet } from "react-router-dom";

export const Container = () => {
  return (
    <>
      <div className=" min-h-screen sm:ml-64 sm:p-2  mt-24 ">
        <Outlet />
      </div>
    </>
  );
};
