import  { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import styled from "styled-components"; // Import styled-components

// Styled Components
const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ForgotPasswordLink = styled.p`
  text-align: right;
  font-size: 14px;
`;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        position: "bottom-center",
      });
      return;
    }

    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Storing user data in Firestore
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        photo: "", // Placeholder for photo if needed
      });

      console.log("User Registered Successfully!");
      toast.success("User Registered Successfully!", {
        position: "top-center",
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <FormContainer onSubmit={handleRegister}>
      <FormTitle>Sign Up</FormTitle>

      <div className="mb-3">
        <label>Firstname</label>
        <InputField
          type="text"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <InputField
          type="text"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
          required
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <InputField
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <InputField
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>

      <div className="d-grid">
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Sign Up"}
        </SubmitButton>
      </div>

      <ForgotPasswordLink>
        Already registered? <a href="/login">Login</a>
      </ForgotPasswordLink>
    </FormContainer>
  );
}

export default Register;
