// eslint-disable-next-line react/prop-types
const Loading = ({ message = "Loading..." }) => {
  return (
    <div className=" h-[50vh] w-[50vw] text-4xl m-auto mt-8  flex justify-center items-center text-blue-600">
      <h1 aria-live="polite">{message}</h1>
    </div>
  );
};

export default Loading;
