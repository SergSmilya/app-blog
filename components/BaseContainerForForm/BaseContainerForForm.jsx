import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

export default function BaseContainerForForm({
  children,
  pageTitle,
  additionalTitle,
}) {
  const { container, title, pres__title, container__avatar } = styles;

  return (
    <View style={container}>
      {pageTitle === "Реєстрація" && <View style={container__avatar}></View>}
      <Text style={title}>{pageTitle}</Text>
      {children}
      <Pressable onPress={() => Alert.alert("onPress", "OK")}>
        <Text style={[title, pres__title]}>{additionalTitle}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 263,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
    textAlign: "center",
    marginTop: 92,
    color: "#212121",
  },
  pres__title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
    marginTop: 16,
    color: "#1B4371",
  },
  container__avatar: {
    position: "absolute",
    left: "50%",
    transform: [{ translateY: -60 }, { translateX: -45 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
});
