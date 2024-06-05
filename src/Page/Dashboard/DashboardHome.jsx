import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProfileChart from "./ProfileChart";

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://movie-flix-server.vercel.app/user/${user?.email}`).then((res) =>
      res.json()
    );
  }, [user]);
  return (
    <div className="flex   rounded-lg overflow-hidden shadow-lg bg-white h-1/2">
      <div className="w-1/2 p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Profile Information</h1>
          <Link
            to={`/dashboard/profile/edit/${user?._id}`}
            className="btn btn-neutral btn-md"
          >
            Edit Profile
          </Link>
        </div>
        <div className="flex items-center mb-6">
          <img
            src={
              user?.photoURL ||
              "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg"
            }
            alt="Profile"
            className="rounded-full h-24 w-24 mr-4 shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <h2 className="text-xl font-semibold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
        
      </div>
      <div className=" text-center w-1/2 bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <ProfileChart />
      </div>
    </div>
  );
};

export default DashboardHome;
