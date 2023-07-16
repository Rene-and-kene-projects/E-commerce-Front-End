import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import SearchBar from "./Components/SearchBar";
import PopularBanner from "./Components/PopularBanner";
import sneaker_text_logo from "../../assets/sneaker_text_logo.png";

const Home = () => {
  return (
    <ScrollView style={styles.bg}>
      <SafeAreaView style={styles.notification_container}>
        <Image
          source={sneaker_text_logo}
          style={{ position: "relative", left: 120 }}
        />

        <Ionicons
          name="notifications-outline"
          size={30}
          color="black"
          style={styles.notification_icon}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  notification_container: {
    flex: 0,
    height: 90,
    backgroundColor: "white",
    marginBottom: 1,
  },
  notification_icon: {
    position: "absolute",
    left: 330,
    top: 50,
  },
  bg: {
    backgroundColor: "white",
  },
  shoegodStyle: {
    position: "absolute",
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: 700,
    top: 40,
  },
});
