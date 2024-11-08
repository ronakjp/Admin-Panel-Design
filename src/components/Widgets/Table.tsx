import { useState } from "react";

import TableContainer from "./TableContainer";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
const Table = () => {
  // State to keep track of expanded row
  const [expandedRow, setExpandedRow] = useState(null);

  // Function to toggle row expansion
  const handleExpandClick = (index: any) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // Define the possible statuses for each product
  const ProductStatus = {
    IN_STOCK: "In Stock",
    OUT_OF_STOCK: "Out of Stock",
    LIMITED: "Limited",
    PRE_ORDER: "Pre-Order",
  };
  const statusClasses = {
    [ProductStatus.IN_STOCK]: "bg-green-100 text-green-800 border-green-300",
    [ProductStatus.OUT_OF_STOCK]: "bg-red-100 text-red-800 border-red-300",
    [ProductStatus.LIMITED]: "bg-yellow-100 text-yellow-800 border-yellow-300",
    [ProductStatus.PRE_ORDER]: "bg-blue-100 text-blue-800 border-blue-300",
  };

  // Sample data with a status for each record
  const productData = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
      status: ProductStatus.IN_STOCK,
      details: {
        description:
          "Powerful laptop with Retina display and Intel Core i9 processor.",
        releaseDate: "2021-09-24",
        sku: "AP-MBP-17-2021",
        weight: "4.3 lbs",
      },
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
      status: ProductStatus.PRE_ORDER,
      details: {
        description:
          "Versatile laptop with touchscreen and Surface Pen compatibility.",
        releaseDate: "2022-01-15",
        sku: "MS-SP-2022",
        weight: "1.7 lbs",
      },
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
      status: ProductStatus.LIMITED,
      details: {
        description:
          "Wireless mouse with multi-touch capabilities for seamless control.",
        releaseDate: "2019-11-05",
        sku: "AP-MM2-2019",
        weight: "0.22 lbs",
      },
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
      status: ProductStatus.OUT_OF_STOCK,
      details: {
        description:
          "Google's flagship smartphone with high-quality camera and OLED display.",
        releaseDate: "2021-08-20",
        sku: "GO-PIX-2021",
        weight: "0.35 lbs",
      },
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999",
      status: ProductStatus.IN_STOCK,
      details: {
        description:
          "Advanced smartwatch with fitness tracking and cellular connectivity.",
        releaseDate: "2020-10-10",
        sku: "AP-WATCH5-2020",
        weight: "0.08 lbs",
      },
    },
  ];

  return (
    <div className=" m-6 border border-gray-100 rounded-2xl bg-white shadow-lg">
      <div className="p-3 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className=" w-full text-sm text-left bg-red-00  ">
          <thead className="text-xs  uppercase   ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {productData.map((eachProduct, index) => (
              <React.Fragment key={index}>
                <tr className="  border-b border-gray-200 hover:bg-gray-200  hover:text-[#4b49ac] font-light ">
                  <td scope="row" className="px-6 py-4  whitespace-nowrap">
                    {eachProduct.name}
                  </td>
                  <td className="px-6 py-4"> {eachProduct.color}</td>
                  <td className="px-6 py-4">{eachProduct.category}</td>
                  <td className="px-6 py-4">{eachProduct.price}</td>
                  <td className="whitespace-nowrap w-auto ">
                    <div
                      className={`border inline-block px-2 py-1 rounded-3xl text-xs ${statusClasses[eachProduct.status]}`}
                    >
                      {eachProduct.status}
                    </div>
                  </td>
                  <td className=" px-6 py-4 inline-block">
                    <button
                      onClick={() => handleExpandClick(index)}
                      className={`font-medium 
                        text-appPrimary 
                        border 
                        border-primary 
                        rounded-full 
                        p-2 
                        text-lg 
                        hover:bg-primary 
                        hover:text-white 
                        transition-transform 
                        duration-500 
                        ease-in-out ${
                          expandedRow === index ? "rotate-180 bg-primary " : ""
                        }`}
                      style={{ transformOrigin: "center" }}
                    >
                      <IoIosArrowDown
                        color={expandedRow === index ? "white" : ""}
                      />
                    </button>
                  </td>
                </tr>
                {expandedRow === index && (
                  <TableContainer productDetails={eachProduct.details} />
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <nav className="ms-1 mt-2  text-right ">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight rounded-s-lg  hover:text-white hover:bg-primary hover:font-medium  border border-gray-300 bg-background"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight  hover:text-white hover:bg-primary hover:font-medium  border border-gray-300 bg-background"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight  hover:text-white hover:bg-primary hover:font-medium  border border-gray-300 bg-background"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight rounded-e-lg  hover:text-white hover:bg-primary hover:font-medium  border border-gray-300 bg-background"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;
