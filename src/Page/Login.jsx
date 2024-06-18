import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase.config";
import GoogleLogin from "../Component/Authentication/GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, loading , navigate ,from]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-row bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        <div className="w-1/2 bg-gradient-to-r from-blue-200 to-purple-400 p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Login to MovieFlix
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-indigo-400 text-white hover:bg-indigo-500 w-full py-2 rounded-md"
                type="submit"
                value="Login"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6 text-center">
              <p>
                New here?{" "}
                <Link to="/registration" className="text-indigo-600 font-bold">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div
          className="w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/800x600?movie')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to MovieFlix</h2>
            <p className="text-lg mb-4">
              Discover and stream your favorite movies and Series.
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

export default Login;
