import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import google from "../../../google.png";
import { useNavigate } from 'react-router-dom'; 

function SignInWithGoogle() {
  const navigate = useNavigate();  
  let isAuthenticating = false;   

  async function googleLogin() {
    if (isAuthenticating) {
      return;  
    }
    isAuthenticating = true;  

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.readonly');
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
      console.log("User data:", user);

      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: user.displayName,
        photo: user.photoURL,
        lastName: "", 
      });

      toast.success("User logged in successfully", { position: "top-center" });

      const token = result.credential.accessToken;  
      console.log("Google OAuth token:", token);

      const response = await fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        console.log('Playlists:', data.items);
      } else {
        toast.info("No playlists found for this user.", { position: "top-center" });
      }

      navigate('/profile'); 

    } else {
      toast.error("No user returned from Google login.", { position: "top-center" });
    }

    isAuthenticating = false;  
  }

  return (
    <>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}  
      >
        <img src={google} width={"60%"} alt="Google Sign-In" />
      </div>
    </>
  );
}

export default SignInWithGoogle;
