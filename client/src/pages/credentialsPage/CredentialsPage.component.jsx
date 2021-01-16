import React from "react";
import SignIn from "../../components/signIn/SignIn.component";
import SignUp from "../../components/singUp/SignUp.component";
import "./credentialsPage.styles.scss";
const CredentialsPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default CredentialsPage;
