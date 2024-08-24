import { useContext } from "react";
import { PincodeContext } from "../Context/Context";

const Error = () => {
  const { error } = useContext(PincodeContext);

  if (!error) return null; // Return nothing if there's no error

  return (
    <div style={{ color: "red", marginTop: "20px" }}>
      <h1 className="error-message h-[50vh] w-[50vw] text-4xl m-auto mt-8  flex justify-center items-center text-red-600  ">
        {error}
      </h1>
    </div>
  );
};

export default Error;
