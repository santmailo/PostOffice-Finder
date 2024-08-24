import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import ShowDetails from "./Components/ShowDetails.jsx";
import Navbar from "./Components/Navbar.jsx";
import Loading from "./Components/Loading.jsx";
import { useContext } from "react";
import { PincodeContext } from "./Context/Context.jsx";

function App() {
  const { loading, data, error } = useContext(PincodeContext);

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/details"
            element={
              loading ? (
                <Loading />
              ) : error ? (
                <div className="error-message h-[50vh] w-[50vw] text-4xl m-auto mt-8  flex justify-center items-center text-red-600">
                  {error}
                </div>
              ) : data.length === 0 ? (
                <div className="no-data-message">
                  Couldn’t find the postal data you’re looking for…
                </div>
              ) : (
                <ShowDetails />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
