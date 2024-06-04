import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Component/Authentication/GoogleLogin";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
const [user, loading] = useAuthState(auth);
const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [name, setName] = useState(""); 

const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    
    await createUserWithEmailAndPassword(email, password);


    await axios.post('http://localhost:5000/user', {
      email: email,
      name: name, 
    });

    
    navigate("/", { replace: true });
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

useEffect(() => {
  if (user) {
    navigate("/", { replace: true });
  }
}, [user, navigate, loading]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="flex flex-row bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Register for MovieFlix
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
               Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={email}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-indigo-400 text-white hover:bg-indigo-500 w-full py-2 rounded-md"
                type="submit"
                value="Register"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            
            <div className="mt-6 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div
          className="w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/800x600?cinema')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to MovieFlix</h2>
            <p className="text-lg mb-4">
              Discover and stream your favorite movies and TV shows.
            </p>
            <p className="text-sm">
              Join us for an amazing experience with unlimited entertainment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
