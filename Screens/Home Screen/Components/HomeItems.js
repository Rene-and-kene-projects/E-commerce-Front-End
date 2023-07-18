import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const HomeItems = () => {
  const [loading, setisLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://nice-cyan-cygnet-cap.cyclic.app/products/find")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      {products ? (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardContainer}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.admin_id}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View>
          <Text>Hello</Text>
        </View>
      )}
    </View>
  );
};

export default HomeItems;

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  cardContainer: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: 165,
    height: 180,
    alignItems: "center",
  },
  image: {
    width: 155,
    height: 165,
    resizeMode: "cover", // You can adjust the resizeMode as per your requirement
  },
});
