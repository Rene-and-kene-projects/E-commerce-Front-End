import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PopularBanner = () => {
  const navigation = useNavigation();
  const handleBuyNowPress = () => {
    navigation.navigate("viewitem");
    console.log("Clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text
          style={{
            color: "white",
            paddingTop: 20,
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Popular Today
        </Text>
        <Text
          style={{
            color: "white",
            paddingTop: 5,
            paddingLeft: 20,
            fontWeight: 200,
            marginBottom: 3,
          }}
        >
          20% off for{"\n"}today only!
        </Text>
        <TouchableOpacity
          style={styles.buynowButton}
          onPress={handleBuyNowPress}
        >
          <Text style={styles.buynowButtonText}>Buy Now !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularBanner;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  banner: {
    borderWidth: 1,
    borderColor: "black",
    height: 150,
    width: 300,
    backgroundColor: "black",
    borderRadius: 10,
  },
  imageStyle: {
    position: "absolute",
    top: -50,
    right: 20,
    height: 200,
    transform: [{ rotate: "330deg" }],
  },
  buynowButtonText: {
    color: "white",
  },
  buynowButton: {
    backgroundColor: "#159954",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: 100,
    paddingTop: 10,
    position: "absolute",
    top: 100,
    left: 10,
  },
});
