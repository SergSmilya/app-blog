import { Pressable, Text } from "react-native";

export default function ButtonFormComponent({
  handleButtonSubmit,
  children = "Натисніть",
}) {
  return (
    <Pressable
      style={{
        width: "100%",
        height: 51,
        borderRadius: 100,
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginTop: 43,
        backgroundColor: "#FF6C00",
      }}
      onPress={handleButtonSubmit}
    >
      <Text
        style={{
          fontFamily: "Roboto-Regular",
          fontStyle: "normal",
          fontSize: 16,
          fontWeight: 400,
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
