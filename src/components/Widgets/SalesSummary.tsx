import { HiChartSquareBar } from "react-icons/hi";
import { HiMiniDocumentText } from "react-icons/hi2";
import { IoIosPricetag } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";
import { PiExportBold } from "react-icons/pi";

const SalesSummary = () => {
  return (
    <div className="p-6 m-10 border border-gray-100 rounded-2xl bg-white shadow-lg">
      <div className="flex flex-row justify-between items-center m-2 mb-8 p-2  ">
        <div className="flex flex-col">
          <span className="text-xl text-amber-950 font-bold my-4 ">
            Today's Sales
          </span>
          <span className="mb-4 text-gray-400">Sales Summary</span>
        </div>
        <div className="flex flex-row border border-gray-100 justify-center items-center p-1 rounded-lg shadow-md active:shadow-none text-[rgba(61,56,154,0.88)] font-semibold ">
          <div className="p-2 mr-0">
            <PiExportBold />
          </div>
          <button className="p-2">Export</button>
        </div>
      </div>

      <div className=" grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center gap-x-5 gap-y-3 p-3 ">
        <div className="border border-[rgba(236,137,154,0.4)] bg-[rgba(236,137,154,0.4)] rounded-2xl  flex flex-col p-4 shadow-md w-full h-full ">
          <div className="text-3xl  ">
            <div className=" inline-block bg-[rgba(211,119,147,0.88)] rounded-3xl p-1">
              <HiChartSquareBar />
            </div>
          </div>
          <div className="text-lg font-semibold mb-2 p-1">$1k</div>
          <div className="text-base font-medium ">Total Sales</div>
          <div className="text-xs font-light text-[rgba(61,56,154,0.88)] ">
            {" "}
            <span className="text-green-600 font-bold">+</span> 8% from
            yesterday
          </div>
        </div>

        <div className="border border-[rgba(226,197,125,0.38)] bg-[rgba(226,197,125,0.38)] rounded-2xl  flex flex-col p-4 shadow-md w-full h-full">
          <div className="text-3xl  ">
            <div className=" inline-block bg-[rgba(208,182,115,0.81)] rounded-3xl p-1">
              <HiMiniDocumentText />
            </div>
          </div>
          <div className="text-lg font-semibold mb-2 p-1">300</div>
          <div className="text-base font-medium ">Total Orders</div>
          <div className="text-xs font-light text-[rgba(61,56,154,0.88)] ">
            {" "}
            <span className="text-green-600 font-bold">+</span> 5% from
            yesterday
          </div>
        </div>

        <div className="border border-[rgba(150,226,125,0.4)] bg-[rgba(150,226,125,0.4)] rounded-2xl flex flex-col p-4 shadow-md w-full h-full">
          <div className="text-3xl  ">
            <div className=" inline-block bg-[rgba(126,190,105,0.84)] rounded-3xl p-1">
              <IoIosPricetag />
            </div>
          </div>
          <div className="text-lg font-semibold mb-2 p-1">10</div>
          <div className="text-base font-medium ">Products Sold</div>
          <div className="text-xs font-light text-[rgba(61,56,154,0.88)] ">
            {" "}
            <span className="text-red-600 font-bold">-</span> 5% from yesterday
          </div>
        </div>

        <div className="border border-[rgba(159,125,226,0.4)] bg-[rgba(159,125,226,0.4)] rounded-2xl flex flex-col p-4 shadow-md w-full h-full">
          <div className="text-3xl  ">
            <div className=" inline-block bg-[rgba(124,97,176,0.81)] rounded-3xl p-1">
              <TiUserAdd />
            </div>
          </div>
          <div className="text-lg font-semibold mb-2 p-1">15</div>
          <div className="text-base font-medium ">New Customers</div>
          <div className="text-xs font-light text-[rgba(61,56,154,0.88)] ">
            {" "}
            <span className="text-green-600 font-bold">+</span> 0.5% from
            yesterday
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
