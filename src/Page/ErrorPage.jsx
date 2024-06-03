import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="container flex flex-col justify-center items-center h-screen text-center py-32">
      <img
        src="https://img.freepik.com/free-vector/alert-concept-illustration_114360-368.jpg?t=st=1717425768~exp=1717429368~hmac=79eed6c11e732736a4c75d8f94b9532f9833d9df44be6bc07aa95efb21abe054&w=740"
        alt="Error Illustration"
        className="mb-8 w-1/2"
      />
      <h1 className="text-7xl font-extrabold mb-8">Error {status || 404}</h1>
      <p className="lg:text-3xl">{error?.message}</p>
      <button className="custom-btn mt-8 btn bg-red-500 text-white">
        <Link to="/">HomePage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
