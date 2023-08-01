import { Alert, Image, Pressable } from "react-native";

export default function AddButtonComponent() {
  const imgAdd = require("../../assets/img/add.png");

  return (
    <Pressable
      style={{
        position: "absolute",
        right: "0%",
        bottom: "0%",
        transform: [{ translateY: -12 }, { translateX: 12 }],
      }}
      onPress={() => Alert.alert("onPress", "addFoto")}
    >
      <Image source={imgAdd} />
    </Pressable>
  );
}
