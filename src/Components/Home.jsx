import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PincodeContext } from "../Context/Context";

const Home = () => {
  const { setPincode } = useContext(PincodeContext);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLookup = () => {
    if (/^\d{6}$/.test(userInput)) {
      // Validating 6-digit pincode
      setPincode(userInput);
      navigate("/details");
    } else {
      setError("Please enter a valid 6-digit pincode.");
    }
  };

  return (
    <div className="w-[90vw] m-auto h-[80vh]">
      <h1 className=" pt-[2rem] pb-[2rem] text-4xl font-semibold">
        Enter Pincode
      </h1>
      <input
        type="text"
        className="w-full text-2xl rounded border-[3px] border-black p-3 pl-2 mb-4 "
        placeholder="Pincode"
        onChange={(e) => {
          setUserInput(e.target.value);
          setError(""); // Clear error on new input
        }}
      />
      {error && <p className="text-red-500 text-lg">{error}</p>}{" "}
      {/* Error message */}
      <button
        onClick={handleLookup}
        className="text-3xl p-4 pl-10  pr-10  bg-black mt-6 text-white border-2 rounded-lg hover:bg-slate-500 "
      >
        Lookup
      </button>
    </div>
  );
};

export default Home;
