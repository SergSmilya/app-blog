import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AddButtonComponent from "../AddButtonComponent/AddButtonComponent";

export default function BaseContainerForForm({
  children,
  pageTitle,
  additionalTitle,
  isShowKeyBoardReg,
  isShowKeyBoardLog,
}) {
  const image = require("../../assets/img/photo_BG.jpg");
  const { container, title, pres__title, container__avatar } = styles;
  const [avatar, setAvatar] = useState(null);
  const navigation = useNavigation();
  const PATHTOSCREEN = pageTitle === "Реєстрація" ? "Login" : "Register";

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={{ flex: 1 }} source={image}>
        <View
          style={[
            container,
            isShowKeyBoardReg && { marginTop: 162 },
            pageTitle === "Увійти" && { marginTop: 323 },
            isShowKeyBoardLog && { marginTop: 300 },
          ]}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {pageTitle === "Реєстрація" && (
              <View style={container__avatar}>
                {avatar && (
                  <Image
                    style={{ flex: 1, borderRadius: 16 }}
                    source={avatar}
                  />
                )}
                <AddButtonComponent showAvatar={avatar} setAvatar={setAvatar} />
              </View>
            )}
            <Text style={[title, pageTitle === "Увійти" && { marginTop: 32 }]}>
              {pageTitle}
            </Text>
            {children}
            <Pressable onPress={() => navigation.navigate(PATHTOSCREEN)}>
              <Text style={[title, pres__title]}>{additionalTitle}</Text>
            </Pressable>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 263,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
    textAlign: "center",
    marginTop: 92,
    color: "#212121",
  },
  pres__title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
    marginTop: 16,
    color: "#1B4371",
  },
  container__avatar: {
    position: "absolute",
    left: "50%",
    transform: [{ translateY: -60 }, { translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
});
