import { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

export default function AddFotoInPostComponent() {
  const { takePictureAsync } = new Camera();
  const [type] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <Camera
      style={{ width: "auto", height: 240 }}
      type={type}
      onCameraReady={() => {
        console.log("ReadyCam");
      }}
    >
      <View
        style={[
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: 240,
            marginBottom: 8,
            backgroundColor: "#F6F6F6",
            borderRadius: 8,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#E8E8E8",
          },
          permission.granted && { backgroundColor: "transparent" },
        ]}
      >
        <Pressable
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#FFFFFF",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            color: "#BDBDBD",

            borderRadius: "50%",
            padding: 18,
          }}
          onPress={async () => {
            await takePictureAsync().then(console.log);
          }}
        >
          <Image
            style={{ width: 24, height: 24, tintColor: "#FFFFFF" }}
            source={require("../../assets/img/camera.png")}
          />
        </Pressable>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({});
