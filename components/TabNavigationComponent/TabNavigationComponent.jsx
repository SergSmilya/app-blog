import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "../../Screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "../../Screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigationComponent() {
  const navigation = useNavigation();
  const ICONGRID = require("../../assets/img/svgTabBar/grid.png");
  const ICONUSER = require("../../assets/img/svgTabBar/user.png");
  const ICONUNION = require("../../assets/img/svgTabBar/union.png");

  const ICONLOGOUT = require("../../assets/img/log-out.png");
  const ICONARROWLEFT = require("../../assets/img/arrow-left.png");

  return (
    <Tab.Navigator
      initialRoute={PostsScreen}
      screenOptions={{
        headerTitleStyle: {
          textAlign: "center",
          fontFamily: "Roboto-Medium",
          fontStyle: "normal",
          fontSize: 17,
          fontWeight: 500,
          lineHeight: 22,
          letterSpacing: -0.408,
          color: "#212121",
        },
        headerStyle: {
          height: 88,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingHorizontal: 90,
        },
      }}
    >
      <Tab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerRight: () => {
            return (
              <Pressable style={{ marginRight: 16 }} onPress={() => {}}>
                <Image source={ICONLOGOUT} />
              </Pressable>
            );
          },
          tabBarIcon: () => <Image source={ICONGRID} />,
        }}
      />
      {/* Розбити на компоненти */}
      <Tab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#FF6C00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={ICONUNION} />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <Pressable
                style={{ marginLeft: 16 }}
                onPress={() => navigation.navigate("Публікації")}
              >
                <Image source={ICONARROWLEFT} />
              </Pressable>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Image source={ICONUSER} />,
        }}
      />
    </Tab.Navigator>
  );
}
