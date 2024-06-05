import { FcGoogle } from "react-icons/fc";
import { auth } from "../../Firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleSignIn = async () => {
    signInWithGoogle().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
          image: data?.user?.photoURL,
        };
        fetch("https://movie-flix-server.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          
      }
    });
  };

  return (
    <button onClick={handleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
