import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainNavigator } from "./Navigation/MainNavigator";
import { IntroStackScreen } from "./Navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import Home from "./Screens/Home Screen/Home";
import SearchScreen from "./Screens/Search Screen/SearchScreen";
import CartScreen from "./Screens/Cart Screen/CartScreen";
import ProfileScreen from "./Screens/Profile Screen/ProfileScreen";
import ViewItem from "./Screens/View Item/ViewItem";
import SignUp from "./User-Control/SignUp";
import Login from "./User-Control/Login";
import { RootSiblingParent } from "react-native-root-siblings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "#ff4057" : "black"}
              style={styles.icon}
            />
          );
        },
        tabBarOptions: {
          activeTintColor: "white",
          inactiveTintColor: "white",
          showLabel: true,
          style: {
            backgroundColor: "black",
          },
        },
        tabBarStyle: {
          justifyContent: "center",
          position: "absolute",
          marginBottom: 20,
          borderRadius: 70,
          height: 60,
          width: 380,
          marginLeft: 4,
          backgroundColor: "white",
        },

        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewitem"
            component={ViewItem}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
