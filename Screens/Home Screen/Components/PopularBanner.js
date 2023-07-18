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
      <TouchableOpacity style={styles.banner}>
        <Text style={{color:'white', paddingLeft:20,paddingTop:20}}>POPULAR TODAY</Text>
        <View style={{borderBottomColor:'white', borderBottomWidth:1, marginVertical:15, width:70, position:'relative', left:20}}/>
      </TouchableOpacity>
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
    borderColor: "#ff4057",
    height: 190,
    width: 340,
    backgroundColor: "#ff4057",
    borderRadius:5
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
