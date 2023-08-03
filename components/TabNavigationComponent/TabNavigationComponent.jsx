import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../../Screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "../../Screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";
import { Image, Pressable, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigationComponent() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
        tabBarStyle: {
          height: 83,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen name="Posts" component={PostsScreen} options={{}} />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarButton: () => (
            <Pressable>
              <Image source={require("../../assets/img/add.png")} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
