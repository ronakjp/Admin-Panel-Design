import SalesSummary from "../Widgets/SalesSummary";
import TableStriped from "../Widgets/TableStriped";

const GridLayout = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      <div className=" lg:col-span-3   md:col-span-2 sm:col-span-1">
        <SalesSummary />
      </div>
      <div className="lg:col-span-full ">
        <TableStriped />
      </div>
    </div>
  );
};

export default GridLayout;
