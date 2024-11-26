import ScreenWrapper from "@/components/shared/screenwrapper";
import WelcomeScreen from "@/screens/welcome.screem";
import { StatusBar } from "expo-status-bar";

const WelcomePage = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <WelcomeScreen />
    </ScreenWrapper>
  );
};

export default WelcomePage;
