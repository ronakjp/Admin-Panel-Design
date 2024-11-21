import ChartCard from "../Common/ChartCard";
import GridContainer from "../Common/GridContainer";
import Card from "../Widgets/Card";
import RevenueChart from "../Widgets/RevenueChart";
import SalesSummary from "../Widgets/SalesSummary";
import { HiChartSquareBar, HiDocumentText } from "react-icons/hi";
import { IoIosPricetag } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";
import TrafficChannelPieChart from "../Widgets/TrafficChannelPieChart";

const Dashboard = () => {
  const orderStats = [
    { label: "Order Value", value: "12.3k" },
    { label: "Orders", value: "14k" },
    { label: "Users", value: "71.56%" },
  ];
  const statsData = [
    {
      icon: HiChartSquareBar,
      bgColor: "bg-[rgba(236,137,154,0.4)]",
      borderColor: "border-[rgba(236,137,154,0.4)]",
      value: "$1k",
      title: "Total Sales",
      growth: 8,
    },
    {
      icon: HiDocumentText,
      bgColor: "bg-[rgba(226,197,125,0.38)]",
      borderColor: "border-[rgba(226,197,125,0.38)]",
      value: "300",
      title: "Total Orders",
      growth: 5,
    },
    {
      icon: IoIosPricetag,
      bgColor: "bg-[rgba(150,226,125,0.4)]",
      borderColor: "border-[rgba(150,226,125,0.4)]",
      value: "10",
      title: "Products Sold",
      growth: -5,
    },
    {
      icon: TiUserAdd,
      bgColor: "bg-[rgba(159,125,226,0.4)]",
      borderColor: "border-[rgba(159,125,226,0.4)]",
      value: "15",
      title: "New Customers",
      growth: 0.5,
    },
  ];
  return (
    <>
      <GridContainer columns="grid-cols-1" className="lg:grid-cols-4">
        <Card className="col-span-1 lg:col-span-2 ">
          <SalesSummary
            stats={statsData}
            title="Monthly Overview"
            subtitle="Summary"
          />
        </Card>
        <Card className=" col-span-1  lg:col-span-2 ">
          <ChartCard
            title="Channels Breakdown"
            description="The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc"
          >
            <TrafficChannelPieChart />
          </ChartCard>
        </Card>

        <Card className=" col-span-1  lg:col-span-2 ">
          <div></div>
        </Card>

        <Card className="col-span-1 lg:col-span-2 ">
          <ChartCard
            title="Order Details"
            description="The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc"
            stats={orderStats}
          >
            <RevenueChart />
          </ChartCard>
        </Card>
      </GridContainer>

      <div className=""></div>
    </>
  );
};

export default Dashboard;
