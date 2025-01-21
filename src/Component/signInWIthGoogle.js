import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import google from "../google.png";
import { useNavigate } from 'react-router-dom'; // Use react-router-dom for navigation

function SignInWithGoogle() {
  const navigate = useNavigate(); // Initialize the navigate function
  let isAuthenticating = false; // Prevent multiple login requests

  async function googleLogin() {
    if (isAuthenticating) {
      return; // Prevent multiple requests
    }
    isAuthenticating = true; // Set flag to true while authenticating

    try {
      const provider = new GoogleAuthProvider();

      // Request YouTube Data API scopes
      provider.addScope('https://www.googleapis.com/auth/youtube.readonly');
      provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

      // Sign in with popup
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        console.log("User data:", user);

        // Save user data to Firestore
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "", // Optionally prompt user for additional info
        });

        toast.success("User logged in successfully", { position: "top-center" });

        // Retrieve the OAuth token to interact with the YouTube API
        const token = result.credential.accessToken;
        console.log("Google OAuth token:", token);

        // Fetch the authenticated user's YouTube playlists
        try {
          const response = await fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await response.json();

          if (data.items && data.items.length > 0) {
            console.log('Playlists:', data.items);
            // Handle the YouTube playlists here, for example, store it in a state or the database
          } else {
            toast.info("No playlists found for this user.", { position: "top-center" });
          }

        } catch (error) {
          console.error('Error fetching YouTube playlists:', error);
          toast.error("Error fetching YouTube playlists.", { position: "top-center" });
        }

        // After handling the playlists, redirect to the profile page
        navigate('/profile'); // Use navigate to redirect
      } else {
        toast.error("No user returned from Google login.", { position: "top-center" });
      }
    } catch (error) {
      console.error("Google login error:", error);

      // Handle specific error cases
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error("The login popup was closed before completing the login.", { position: "top-center" });
      } else if (error.code === 'auth/cancelled-popup-request') {
        toast.error("The login popup was cancelled.", { position: "top-center" });
      } else {
        toast.error("Error during Google login. Please try again.", { position: "top-center" });
      }
    } finally {
      isAuthenticating = false; // Reset authentication flag after completion
    }
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
