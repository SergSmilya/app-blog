import { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

export default function InputLocationInPostComponent() {
  const [descriptionLocationText, setDescriptionLocationText] = useState("");
  return (
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
  );
}

const styles = StyleSheet.create({});
