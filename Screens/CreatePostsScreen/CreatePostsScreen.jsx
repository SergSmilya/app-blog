import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import ButtonFormComponent from "../../components/ButtonFormComponent/ButtonFormComponent";

export default function CreatePostsScreen() {
  const { container } = styles;

  const [descriptionValue, setDescriptionValue] = useState("");
  const [descriptionLocationText, setDescriptionLocationText] = useState("");

  return (
    <View style={container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
          height: 240,
          marginBottom: 8,
          backgroundColor: "#F6F6F6",
          borderRadius: 8,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#E8E8E8",
        }}
      >
        <Pressable
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            padding: 18,
          }}
        >
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/img/camera.png")}
          />
        </Pressable>
      </View>
      <Text
        style={{
          marginBottom: 32,
          fontFamily: "Roboto-Regular",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          color: "#BDBDBD",
        }}
      >
        Завантажте фото
      </Text>
      <TextInput
        style={{
          width: "auto",
          height: 50,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderStyle: "solid",
          borderColor: "#E8E8E8",
          fontFamily: "Roboto-Medium",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          color: "#212121",
          marginBottom: 16,
        }}
        inputMode="text"
        placeholder="Назва..."
        placeholderTextColor="#DBDBDB"
        onChangeText={setDescriptionValue}
        value={descriptionValue}
      />
      <View
        style={{
          position: "relative",
          width: "auto",
          height: 50,
          marginBottom: 32,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 16,
            paddingHorizontal: 28,
            borderBottomWidth: 1,
            borderStyle: "solid",
            borderColor: "#E8E8E8",
            fontFamily: "Roboto-Medium",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 500,
            color: "#212121",
          }}
          inputMode="text"
          placeholder="Місцевість..."
          placeholderTextColor="#DBDBDB"
          onChangeText={setDescriptionLocationText}
          value={descriptionLocationText}
        />
        <Image
          style={{
            position: "absolute",
            top: "50%",
            transform: [{ translateY: -12 }],
            width: 24,
            height: 24,
          }}
          source={require("../../assets/img/map-pin.png")}
        />
      </View>
      <ButtonFormComponent>Опубліковати</ButtonFormComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
});
