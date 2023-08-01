import { TextInput } from "react-native";

export default function InputComponent({
  placeholderText = "Введіть значення",
  inputMode = "text",
  handleChange,
  handleBlur,
  value,
}) {
  return (
    <TextInput
      style={{
        width: "100%",
        height: 50,
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        color: "#BDBDBD",
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
      }}
      onChangeText={handleChange}
      onBlur={handleBlur}
      placeholder={placeholderText}
      inputMode={inputMode}
      value={value}
    />
  );
}
