const TableContainer = ({
  productDetails,
}: {
  productDetails: {
    description: string;
    releaseDate: string;
    sku: string;
    weight: string;
  };
}) => {
  const tableContainerHeadingStyle = "font-thin text-xs p-1";

  const tableContainerInformationStyle = "pb-1 pl-1 text-wrap";

  const tableContainerStyle = "grid grid-cols-4 text-gray-700";

  return (
    <tr className="bg-background ">
      <td colSpan={6}>
        <div className={tableContainerStyle}>
          <div className="p-2 pl-5">
            <div className={tableContainerHeadingStyle}>Description: </div>
            <div className={tableContainerInformationStyle}>
              {" "}
              {productDetails.description}
            </div>
          </div>
          <div className="p-2">
            <div className={tableContainerHeadingStyle}>Release Date: </div>
            <div className={tableContainerInformationStyle}>
              {" "}
              {productDetails.releaseDate}
            </div>
          </div>

          <div className="p-2">
            <div className={tableContainerHeadingStyle}>SKU: </div>
            <div className={tableContainerInformationStyle}>
              {" "}
              {productDetails.sku}
            </div>
          </div>
          <div className="p-2">
            <div className={tableContainerHeadingStyle}>Weight: </div>
            <div className={tableContainerInformationStyle}>
              {" "}
              {productDetails.weight}
            </div>
          </div>

          {/* <div className="">
            <div>Release Date: </div>
            <div> {productDetails.releaseDate}</div>
          </div> */}
          {/* <p>
              <strong></strong> {productDetails.releaseDate}
            </p>
            <p>
              <strong>SKU:</strong> {productDetails.sku}
            </p>
            <p>
              <strong>Weight:</strong> {productDetails.weight}
            </p> */}
          {/* Add more fields as needed */}
        </div>
      </td>
    </tr>
  );
};

export default TableContainer;
