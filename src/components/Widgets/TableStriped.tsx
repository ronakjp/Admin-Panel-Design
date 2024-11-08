import { IoIosArrowForward } from "react-icons/io";

const TableStriped = () => {
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
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
      status: ProductStatus.PRE_ORDER,
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
      status: ProductStatus.LIMITED,
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
      status: ProductStatus.OUT_OF_STOCK,
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999",
      status: ProductStatus.IN_STOCK,
    },
  ];

  return (
    <div className=" m-6 border border-gray-100 rounded-2xl bg-white shadow-lg">
      <div className="p-3 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className=" w-full text-sm text-left bg-red-00 ">
          <thead className="text-xs  uppercase  ">
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
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((eachProduct) => (
              <tr className="  border-b border-gray-200 hover:bg-gray-200  hover:text-[#4b49ac] font-light">
                <td scope="row" className="px-6 py-4  whitespace-nowrap">
                  {eachProduct.name}
                </td>
                <td className="px-6 py-4"> {eachProduct.color}</td>
                <td className="px-6 py-4">{eachProduct.category}</td>
                <td className="px-6 py-4">{eachProduct.price}</td>
                <td className="px-6 py-4">
                  <div
                    className={`border inline-block px-2 py-1 rounded-3xl text-xs ${statusClasses[eachProduct.status]}`}
                  >
                    {eachProduct.status}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <IoIosArrowForward />
                  </a>
                </td>
              </tr>
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

export default TableStriped;
