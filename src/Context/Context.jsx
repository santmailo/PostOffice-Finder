import { createContext, useState, useEffect } from "react";

export const PincodeContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [pincode, setPincode] = useState(122001); // Default pincode value
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Start with loading as false
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(""); // Clear previous errors
      setData([]); // Clear previous data

      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${pincode}`
        );

        if (!response.ok) {
          setError("Failed to fetch data");
          setLoading(false);
          return; // Return early if response is not ok
        }

        const result = await response.json();

        if (result[0].Status === "Error") {
          setError("Invalid Pincode");
        } else {
          setData(result[0].PostOffice);
        }

        setLoading(false);
      } catch {
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [pincode]);

  return (
    <PincodeContext.Provider
      value={{
        pincode,
        setPincode,
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </PincodeContext.Provider>
  );
};
