import { Alert, Image, Pressable } from "react-native";

export default function AddButtonComponent({ showAvatar }) {
  const imgAdd = require("../../assets/img/add.png");
  const imgRemove = require("../../assets/img/remove.png");
  const iconOperation = showAvatar ? imgRemove : imgAdd;

  return (
    <Pressable
      style={{
        position: "absolute",
        right: "0%",
        bottom: "0%",
        transform: [{ translateY: -12 }, { translateX: 15 }],
      }}
      onPress={() => alert("changeFoto")}
    >
      <Image source={iconOperation} />
    </Pressable>
  );
}
