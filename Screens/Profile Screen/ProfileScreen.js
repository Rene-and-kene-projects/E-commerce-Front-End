import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import sneaker_text_logo from "../../assets/sneaker_text_logo.png";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleJoinUsPress = () => {
    console.log("Join Us");
    navigation.navigate("signup");
  };
  const LoginPress = () => {
    console.log("Join Us");
    navigation.navigate("login");
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 40,
          fontWeight: 500,
          marginBottom: 20,
        }}
      >
        <Image
          source={sneaker_text_logo}
          style={{ position: "relative", left: 120 }}
        />
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.joinUsButton}
          onPress={handleJoinUsPress}
        >
          <Text style={{ color: "white", fontWeight: 500 }}>
            JOIN SNEAKERGOD !
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={LoginPress}>
          <Text style={{ color: "white", fontWeight: 500 }}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  joinUsButton: {
    borderWidth: 2,
    backgroundColor: "#282634",
    padding: 15,
    marginRight: 10,
    borderColor: "#282634",
  },
  signInButton: {
    borderWidth: 2,
    backgroundColor: "#282634",
    padding: 15,
    borderColor: "#282634",
  },
});
