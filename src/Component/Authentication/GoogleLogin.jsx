import { FcGoogle } from "react-icons/fc";
import { auth } from "../../Firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleSignIn = async () => {
   
        await signInWithGoogle();
      
     
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