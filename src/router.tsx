import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ViewTable from "./components/ViewTable/ViewTable";
import Charts from "./components/Charts/Charts";
import { Container } from "./components/Container";
import Layout from "./components/Common/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/view-table",
        index: true,
        element: <ViewTable />,
      },
      {
        path: "/charts",
        index: true,
        element: <Charts />,
      },
    ],
  },
]);
