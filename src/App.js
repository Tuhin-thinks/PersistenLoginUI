import "bootstrap/dist/css/bootstrap.min.css";
import AppPage from "./containers/AppBase";
import SignInPage from "./containers/Auth/SignIn";
import SignUpPage from "./containers/Auth/SignUp";
import LandingPage from "./containers/landing-page";

const App = () => {
  return (
    <AppPage
      LandingPage={<LandingPage />}
      SignUpPage={<SignUpPage />}
      SignInPage={<SignInPage />}
    />
  );
};

export default App;
