import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white flex ">
      <div className="w-2/12 border-r-white border-r-4 flex justify-center items-center">
        <Link to="/">
          {" "}
          <h1 className=" text-4xl p-[20px] font-bold">PostCode</h1>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full ">
        <Link
          className="text-4xl font-bold hover:bg-white p-8 hover:text-black"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
