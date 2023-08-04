import { View } from "react-native";

import UserInformationComponent from "../../components/UserInformationComponent/UserInformationComponent";

export default function PostsScreen() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <UserInformationComponent />
    </View>
  );
}
