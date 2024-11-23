import {
  BottomNavOne,
  FooterOne,
  HeaderOne,
  HeroSectionOne,
  LoginFormOne,
  NewPasswordFormOne,
  OtpVerificationFormOne,
  PasswordResetFormOne,
  SignupFormOne,
} from "@repo/react-ui";

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
