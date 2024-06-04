import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config";



const DashboardHome = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex max-w-lg mx-auto rounded-lg overflow-hidden">
    <div
      className="w-1/2"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/view-3d-cinema-film-reel_23-2151066943.jpg?t=st=1717509999~exp=1717513599~hmac=38b0f2ef54c55435d970bd846596f746f5b45b710484d3d83a8c58322c43206a&w=1380')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center p-4 bg-white bg-opacity-75">
        <img
          src={
            user?.photoURL ||
            "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1716668382~exp=1716671982~hmac=ce68d241a8adffe9b53b6a16d7f67a81ea62060729024bd94c95514a0d5674cd&w=740"
          }
          alt="Profile"
          className="mx-auto rounded-full h-24 w-24 mb-4"
        />
        <h2 className="text-2xl font-bold">
          {user?.displayName || "Default Name"}
        </h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <div className="text-center pb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>

    <div className="w-1/2">
      <div className="text-center p-4">
   
      </div>
    </div>
  </div>
);

};

export default DashboardHome;
