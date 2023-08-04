import { View } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import TabNavigationComponent from "../../components/TabNavigationComponent/TabNavigationComponent";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigationComponent />
    </View>
  );
}
