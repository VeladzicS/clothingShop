import React, { useState } from "react";
import "./signIn.styles.scss";
import FormInput from "../formInput/FormInput.component";
import CustomButton from "../customButton/CustomButton.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserCredentials({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign in
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
