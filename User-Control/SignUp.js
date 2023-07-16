import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native";
import React from "react";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import "react-native-url-polyfill/auto";
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [isLoading, setisLoading] = useState(false);

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
  const successToast = (toast) => {
    Toast.show(toast, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      containerStyle: { top: 50, backgroundColor: "black" },
    });
  };

  const handleSignUp = async () => {
    setisLoading(true);
    const response = await axios
      .post("https://nice-cyan-cygnet-cap.cyclic.app/users/signup", {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      })
      .then((response) => {
        console.log(response.data);
        setisLoading(false);
        successToast("Succesfull, check email for confirmation");
        navigation.navigate("login");
      })
      .catch((error) => {
        setisLoading(false);
        console.log(error.response);
        if (error.response.data.message == "User already exists") {
          errorToast("Email already exists, try to logging in");
        } else {
          errorToast(
            "Error Signing in , check internet connection and try again"
          );
        }
      });
  };
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <SafeAreaView style={{ flex: 0, alignItems: "center", marginTop: 90 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: 500, marginBottom: 10 }}>
            JOIN US
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "grey",
              marginBottom: 50,
            }}
          >
            Create Your Account
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
          <TextInput
            placeholder="First Name"
            style={styles.formField}
            value={firstname}
            onChangeText={(value) => setfirstname(value)}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.formField}
            value={lastname}
            onChangeText={(value) => setlastname(value)}
          />
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="black"
              style={styles.signUpButton}
            />
          ) : (
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Feather name="arrow-right-circle" size={70} color="black" />
            </TouchableOpacity>
          )}

          <Text style={{ textAlign: "center", marginBottom: 50 }}>
            Already have an account?
          </Text>
          <Text style={{ textAlign: "center" }}>
            By Signing up, you agree to the {"\n"} Terms and conditions
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  formField: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    width: 350,
    borderRadius: 15,
    marginBottom: 40,
  },
  signUpButton: {
    padding: 10,
    borderColor: "black",

    paddingHorizontal: 10,
    width: 350,
    height: 100,
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 10,
  },
});
