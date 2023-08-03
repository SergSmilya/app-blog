import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import ActivityInd from "./components/ActivityInd/ActivityInd";
import TabNavigationComponent from "./components/TabNavigationComponent/TabNavigationComponent";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <View style={container}>
        <ImageBackground style={container} source={image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={container}
          >
            {/* <Stack.Navigator initialRouteName="Register">
              <Stack.Screen
                name="Register"
                component={RegistrationScreen}
                options={{
                  headerTitle: () => (
                    <ImageBackground
                      style={{ backgroundColor: "transparent" }}
                      source={image}
                    />
                  ),
                }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Overview" }}
              />
            </Stack.Navigator> */}
            <TabNavigationComponent />
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
