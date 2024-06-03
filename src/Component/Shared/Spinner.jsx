import { ClockLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClockLoader size={100} color="#4F46E5" />
    </div>
  );
};

export default Spinner;
