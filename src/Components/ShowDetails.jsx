import { useContext, useState, useEffect } from "react";
import { PincodeContext } from "../Context/Context";

const ShowDetails = () => {
  const { pincode, data } = useContext(PincodeContext);
  const [newData, setNewData] = useState(data);
  const [filter, setFilter] = useState("");

  // Debounce effect for filtering
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const tempArr = data.filter((item) =>
        item.Name.toLowerCase().includes(filter.toLowerCase())
      );
      setNewData(tempArr);
    }, 300);

    return () => clearTimeout(timeoutId); // Cleanup debounce
  }, [filter, data]);

  return (
    <div className="w-[90vw] m-auto h-[80vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold mt-4 mb-4">Pincode: {pincode}</h3>
        <h3 className="text-2xl mt-4 mb-4">
          <span className="text-red-400">Result(s) found: </span>
          <span className="font-bold">{newData.length}</span>
        </h3>
      </div>
      <div>
        <input
          type="text"
          className="w-full text-2xl rounded border-[3px] border-black p-2 pl-2 mb-5 mt-5 "
          placeholder="Filter by branch name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-[30px] h-[63vh] overflow-scroll overflow-x-hidden">
        {newData.length > 0 ? (
          newData.map((item) => (
            <div
              className="border-yellow-300 border-4 rounded-md flex flex-col justify-center align-center p-10 gap-5 bg-black text-white"
              key={item.Name} // Changed key to item.Name for uniqueness
            >
              <p> Name: {item.Name}</p>
              <p>Branch Type: {item.BranchType}</p>
              <p>Delivery Status: {item.DeliveryStatus}</p>
              <p>District: {item.District}</p>
              <p>Division: {item.Division}</p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-red-500 text-2xl">
            Couldn’t find the postal data you’re looking for…
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;
