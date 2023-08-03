import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Alert, Image } from "react-native";
import AddButtonComponent from "../AddButtonComponent/AddButtonComponent";

export default function BaseContainerForForm({
  children,
  pageTitle,
  additionalTitle,
  isShowKeyBoardReg,
  isShowKeyBoardLog,
}) {
  const { container, title, pres__title, container__avatar } = styles;
  const [avatar, setAvatar] = useState(null);

  return (
    <View
      style={[
        container,
        isShowKeyBoardReg && { marginTop: 162 },
        pageTitle === "Увійти" && { marginTop: 323 },
        isShowKeyBoardLog && { marginTop: 300 },
      ]}
    >
      {pageTitle === "Реєстрація" && (
        <View style={container__avatar}>
          {avatar && (
            <Image style={{ flex: 1, borderRadius: 16 }} source={avatar} />
          )}
          <AddButtonComponent showAvatar={avatar} setAvatar={setAvatar} />
        </View>
      )}
      <Text style={[title, pageTitle === "Увійти" && { marginTop: 32 }]}>
        {pageTitle}
      </Text>
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

// import { useEffect, useState } from "react";
// import { StyleSheet, View, Text, Pressable, Alert, Image } from "react-native";
// import AddButtonComponent from "../AddButtonComponent/AddButtonComponent";

// export default function BaseContainerForForm({
//   children,
//   pageTitle,
//   additionalTitle,
//   isShowKeyBoardReg,
//   isShowKeyBoardLog,
// }) {
//   const { container, title, pres__title, container__avatar } = styles;
//   const [showAvatar, setShowAvatar] = useState(null);

//   const AVATAR = require("../../assets/img/photo_Natali.jpg");

//   useEffect(() => {
//     if (AVATAR) {
//       setShowAvatar(true);
//     } else {
//       setShowAvatar(false);
//     }
//   }, []);

//   return (
//     <View
//       style={[
//         container,
//         isShowKeyBoardReg && { marginTop: 147 },
//         pageTitle === "Увійти" && { marginTop: 323 },
//         isShowKeyBoardLog && { marginTop: 273 },
//       ]}
//     >
//       {pageTitle === "Реєстрація" && (
//         <View style={container__avatar}>
//           <Image style={{ flex: 1, borderRadius: 16 }} source={AVATAR} />
//           <AddButtonComponent
//             showAvatar={showAvatar}
//             setShowAvatar={setShowAvatar}
//           />
//         </View>
//       )}
//       <Text style={[title, pageTitle === "Увійти" && { marginTop: 32 }]}>
//         {pageTitle}
//       </Text>
//       {children}
//       <Pressable onPress={() => Alert.alert("onPress", "OK")}>
//         <Text style={[title, pres__title]}>{additionalTitle}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     flex: 1,
//     marginTop: 263,
//     paddingHorizontal: 16,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     backgroundColor: "#FFF",
//   },
//   title: {
//     fontFamily: "Roboto-Medium",
//     fontSize: 30,
//     fontStyle: "normal",
//     fontWeight: 500,
//     textAlign: "center",
//     marginTop: 92,
//     color: "#212121",
//   },
//   pres__title: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     fontWeight: 400,
//     marginTop: 16,
//     color: "#1B4371",
//   },
//   container__avatar: {
//     position: "absolute",
//     left: "50%",
//     transform: [{ translateY: -60 }, { translateX: -45 }],
//     width: 120,
//     height: 120,
//     borderRadius: 16,
//     backgroundColor: "#F6F6F6",
//   },
// });
