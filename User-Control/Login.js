import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import React from "react";
import axios from "axios";
import "react-native-url-polyfill/auto";
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigate = useNavigation();

  const errorToast = (toast) => {
    Toast.show(toast, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      containerStyle: { top: 20, backgroundColor: "red" },
    });
  };

  const [email, setemail] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [password, setpassword] = useState("");

  const handleLogin = async () => {
    setisLoading(true);
    const response = await axios
      .post("https://nice-cyan-cygnet-cap.cyclic.app/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        navigate.navigate("TabNavigator");
        console.log(response);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setisLoading(false);
        errorToast("Invalid email or password, try again ");
      });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <SafeAreaView style={{ flex: 0, alignItems: "center", marginTop: 50 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: 500, marginBottom: 10 }}>
            Login
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "grey",
              marginBottom: 50,
            }}
          >
            Sign in to your account
          </Text>
        </View>
      </SafeAreaView>
      <View>
        <View style={{ backgroundColor: "white", marginLeft: 20 }}>
          <TextInput
            placeholder="Email Address"
            style={styles.formField}
            value={email}
            onChangeText={(value) => setemail(value)}
          />
          <TextInput
            placeholder="Password"
            style={styles.formField}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setpassword(value)}
          />
          {isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
              <Text style={{ color: "white" }}>Login</Text>
            </TouchableOpacity>
          )}

          <Text style={{ textAlign: "center", marginBottom: 50 }}>
            Dont Have an Account?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  formField: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    width: 350,
    borderRadius: 15,
    marginBottom: 50,
  },
  LoginButton: {
    padding: 10,
    borderColor: "black",
    backgroundColor: "black",
    paddingHorizontal: 10,
    width: 350,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
});
