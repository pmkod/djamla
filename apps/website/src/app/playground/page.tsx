import {
  BottomNavOne,
  FooterOne,
  HeaderOne,
  HeroSectionOne,
  LoginFormOne,
  NewPasswordFormOne,
  PasswordResetFormOne,
  SignupFormOne,
  UserVerificationFormOne,
} from "@repo/react-ui";
import React from "react";

const PlaygroundPage = () => {
  return (
    <>
      <HeaderOne />
      <HeroSectionOne />
      <LoginFormOne />
      <SignupFormOne />
      <PasswordResetFormOne />
      <NewPasswordFormOne />
      <UserVerificationFormOne />
      <BottomNavOne />
      <FooterOne />
    </>
  );
};

export default PlaygroundPage;
