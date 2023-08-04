import { Image, StyleSheet, Text, View } from "react-native";

export default function UserInformationComponent() {
  const { container, titleUser, subTitleUserEmail } = styles;
  const FOTOUSER = require("../../assets/img/photo_Natali.jpg");

  return (
    //  Змінити на динамічні значення з редаксу
    <View style={container}>
      <Image
        style={{ width: 60, height: 60, marginRight: 8 }}
        source={FOTOUSER}
        alt="fotoUser"
      />
      <View>
        <Text style={titleUser}>Natali Romanova</Text>
        <Text style={subTitleUserEmail}>email@example.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "auto",
    height: 60,
    marginTop: 32,
    borderRadius: 16,
  },
  titleUser: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 13,
    color: "#212121",
  },
  subTitleUserEmail: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.80)",
  },
});
