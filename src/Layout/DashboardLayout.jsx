import { Link,  Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaFilm, FaTv,  FaSignOutAlt, FaHome } from "react-icons/fa";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.config";

const DashboardLayout = () => {
  const[signOut] = useSignOut(auth);
 const navigate = useNavigate()
  const handleLogout = async () => {
    await signOut();
  navigate("/")
  };
  return (
    <div className="flex h-screen">
      <div className="sidebar shadow-xl shadow-black text-white w-64 flex-shrink-0">
        <div className="p-4">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="block flex items-center hover:text-purple-500">
                  <FaUser className="mr-2" />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="add-movies" className="block flex items-center hover:text-purple-500">
                  <FaFilm className="mr-2" />
                  Add Movies
                </Link>
              </li>
              <li>
                <Link to="add-series" className="block flex items-center hover:text-purple-500">
                  <FaTv className="mr-2" />
                  Add Series
                </Link>
              </li>
              <li>
                <Link   onClick={handleLogout} className="block flex items-center hover:text-purple-500">
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </Link>
              </li>
              <li>
                <Link  to="/" className="block flex items-center hover:text-purple-500">
                  <FaHome className="mr-2" />
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1 p-6"><Outlet/></div>
    </div>
  );
};

export default DashboardLayout;
