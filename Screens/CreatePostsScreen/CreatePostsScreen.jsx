import { useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View } from "react-native";

import ButtonFormComponent from "../../components/ButtonFormComponent/ButtonFormComponent";
import AddFotoInPostComponent from "../../components/AddFotoInPostComponent/AddFotoInPostComponent";
import InputLocationInPostComponent from "../../components/InputLocationInPostComponent/InputLocationInPostComponent";

export default function CreatePostsScreen() {
  const { container } = styles;

  const isFocused = useIsFocused();

  const [descriptionValue, setDescriptionValue] = useState("");

  return (
    <View style={container}>
      {isFocused && <AddFotoInPostComponent />}
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
      <InputLocationInPostComponent />
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
