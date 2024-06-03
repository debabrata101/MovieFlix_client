import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config";

function Navber() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 text-white text-2xl font-bold"
            >
              MovieFlix
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/movies"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                   Movies
                </Link>
                <Link
                  to="/series"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Series
                </Link>
                {!user && (
                  <>
                    <Link
                      to="/login"
                      className="text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="ml-4 flex items-center md:ml-6">
                <Link to="/profile" className="text-white flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user?.photoURL || "/path-to-avatar.jpg"}
                    alt="Profile"
                  />
                </Link>
                <button className="ml-3 bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/logout">Logout</Link>
                </button>
              </div>
            ) : (
              <FaUserCircle className="h-8 w-8 text-white" />
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            to="/movies"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            All Movies
          </Link>
          <Link
            to="/series"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Series
          </Link>
          {!user && (
            <>
              <Link
                to="/login"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              <Link
                to="/registration"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Register
              </Link>
            </>
          )}
          {user && (
            <>
              <Link
                to="/profile"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Profile
              </Link>
              <Link
                to="/logout"
                onClick={handleLogout}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navber;
