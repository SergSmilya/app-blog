import { Pressable, Text } from "react-native";

export default function ShowPasswordButtonComponent({
  setIsHidePassword,
  isHidePassword,
}) {
  return (
    <Pressable
      style={{ position: "absolute", right: 16, bottom: "25%" }}
      onPress={() => setIsHidePassword(!isHidePassword)}
    >
      <Text
        style={{
          fontFamily: "Roboto-Regular",
          fontStyle: "normal",
          fontSize: 16,
          fontWeight: 400,
          color: "#1B4371",
        }}
      >
        Показати
      </Text>
    </Pressable>
  );
}
