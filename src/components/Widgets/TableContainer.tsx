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
  return (
    <tr className="bg-background ">
      <td colSpan={6}>
        <div className="grid grid-cols-4 text-gray-700">
          <div className="p-2 pl-5">
            <div className="font-thin text-xs p-1">Description: </div>
            <div className="pb-1 pl-1 text-wrap">
              {" "}
              {productDetails.description}
            </div>
          </div>
          <div className="p-2">
            <div className="font-thin text-xs p-1">Release Date: </div>
            <div className="pb-1 pl-1 text-wrap">
              {" "}
              {productDetails.releaseDate}
            </div>
          </div>

          <div className="p-2">
            <div className="font-thin text-xs p-1">SKU: </div>
            <div className="pb-1 pl-1 text-wrap"> {productDetails.sku}</div>
          </div>
          <div className="p-2">
            <div className="font-thin text-xs p-1">Weight: </div>
            <div className="pb-1 pl-1 text-wrap"> {productDetails.weight}</div>
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
