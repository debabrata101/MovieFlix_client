import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import ProfileChart from "./ProfileChart";
import SocialMedia from "./SocialMedia";

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  console.log(user)
  const [userInfo, setUserInfo] = useState();
  console.log(userInfo)
  useEffect(() => {
    fetch(`https://movie-flix-server-413x.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  return (
    <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-lg bg-white h-1/2">
    <div className="w-full sm:w-1/2 p-6 flex flex-col items-center">
      <div className="flex justify-between w-full mb-4">
        <h1 className="text-2xl font-semibold">Profile Information</h1>
        <Link
          to={`profile/edit/${userInfo?._id}`}
          className="btn btn-neutral btn-md flex items-center"
        >
          <FaEdit className="mr-1" />
          Edit Profile
        </Link>
      </div>
      <div className="flex flex-col items-center mb-6">
        <img
          src={
            user?.photoURL ||
            "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg"
          }
          alt="Profile"
          className="rounded-full h-24 w-24 mb-4 shadow-md"
        />
        <table className="table-auto text-left ">
          <tbody className="">
            <tr>
              <td className="px-2 py-1 font-semibold">Name:</td>
              <td className="px-2 py-1">{userInfo?.displayName || userInfo?.name}</td>
            </tr>
            <tr>
              <td className="px-2 py-1 font-semibold">Age:</td>
              <td className="px-2 py-1">{userInfo?.age}</td>
            </tr>
            <tr>
              <td className="px-2 py-1 font-semibold">Mobile Number:</td>
              <td className="px-2 py-1">{userInfo?.mobileNumber}</td>
            </tr>
            <tr>
              <td className="px-2 py-1 font-semibold">Email:</td>
              <td className="px-2 py-1">{userInfo?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="w-full sm:w-1/2 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <div className="text-gray-600">
        <ProfileChart/>
      </div>
    </div>
    <div className="w-full sm:w-1/2 flex items-center justify-center ">
          <SocialMedia/>
    </div>
  </div>
  );
};

export default DashboardHome;
