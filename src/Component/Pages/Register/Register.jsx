import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import styled from "styled-components";


const FormContainer = styled.form`
  width:30vw;
  margin-left:30vw;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
 
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
  width: 50%;
  
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-left:8vw;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ForgotPasswordLink = styled.p`
  text-align: right;
  font-size: 14px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

   
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

      
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        photo: "", 
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
        <Label>Firstname</Label>
        <InputField
          type="text"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
          required
        />
      </div>

      <div className="mb-3">
        <Label>Last name</Label>
        <InputField
          type="text"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
          required
        />
      </div>

      <div className="mb-3">
        <Label>Email address</Label>
        <InputField
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>

      <div className="mb-3">
        <Label>Password</Label>
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
