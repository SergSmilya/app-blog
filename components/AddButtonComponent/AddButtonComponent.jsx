import { Alert, Image, Pressable } from "react-native";

export default function AddButtonComponent({ showAvatar, setAvatar }) {
  const AVATAR = require("../../assets/img/photo_Natali.jpg");
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
      onPress={() => {
        if (showAvatar) {
          setAvatar(null);
          return;
        }
        setAvatar(AVATAR);
      }}
    >
      <Image source={iconOperation} />
    </Pressable>
  );
}
