import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import ActivityInd from "./components/ActivityInd/ActivityInd";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const { container } = styles;

  const image = require("./assets/img/photo_BG.jpg");

  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter/Inter-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityInd />;
  }

  return (
    <View style={container}>
      <ImageBackground style={container} source={image}>
        <RegistrationScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
