import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      <Ionicons
        name={isFocused ? "search-outline" : "search-outline"}
        size={24}
        color="black"
        style={styles.icon}
      />
      <TextInput
        placeholder="What are you  looking for?"
        style={styles.search_bar}
        placeholderTextColor="grey"
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom:20,
  },
  search_bar: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 20,
    width: 320,
  },
  inputContainer: {
    flexDirection: "row",
  },
  icon: {
    position: "relative",
    top: 38,
    left: -180,
    zIndex: 1,
  },
});
