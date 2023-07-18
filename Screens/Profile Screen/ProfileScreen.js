import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sneaker_text_logo from "../../assets/sneaker_text_logo.png";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { UseSelector, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import boost_img_main from "../../assets/boost_img_main.webp";

const ProfileScreen = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigation = useNavigation();
  const [image, setImage] = useState();

  const handleJoinUsPress = () => {
    console.log("Join Us");
    navigation.navigate("signup");
  };
  const LoginPress = () => {
    console.log("Join Us");
    navigation.navigate("login");
  };
  const token = AsyncStorage.getItem("loginToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleCreateProduct = () => {
    setImage(boost_img_main);

    axios
      .post(
        "https://nice-cyan-cygnet-cap.cyclic.app/products/create",
        {
          name: "Yeezy Boost 350",
          brand: "Adidas",
          category: "Sneakers",
          price: "100",
          size: "41",
          image: image,
        },
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(token);
      });
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
      {isLoggedIn ? (
        <TouchableOpacity onPress={handleCreateProduct}>
          <Text>Create Products</Text>
        </TouchableOpacity>
      ) : (
        <View>
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
        </View>
      )}
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
