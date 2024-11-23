import {
  BottomNavOne,
  FooterOne,
  HeaderOne,
  HeroSectionOne,
  LoginFormOne,
  NewPasswordFormOne,
  PasswordResetFormOne,
  SignupFormOne,
  OtpVerificationFormOne,
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
      <OtpVerificationFormOne />
      <BottomNavOne />
      <FooterOne />
    </>
  );
};

export default PlaygroundPage;
