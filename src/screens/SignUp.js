import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import Icon from "react-native-vector-icons/Entypo";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={styles.centralWallet}>Central Wallet</Text>
        <View style={styles.registrationForm}>
          <MaterialUnderlineTextbox
            textInput1="Name"
            style={styles.name}
          ></MaterialUnderlineTextbox>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CameraScreen")}
          >
            <View style={styles.iconRow}>
              <Icon name="image" style={styles.icon}></Icon>
              <Text style={styles.uploadImage}>Upload Image</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.logIn}
          onPress={() => this.props.navigation.navigate("Log")}
        >
          <Text style={styles.getStarted}>Get started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6,141,122,1)"
  },
  registrationForm: {
    height: 190,
    marginTop: 100,
    marginLeft: 38,
    marginRight: 38
  },
  name: {
    height: 43,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 10
  },
  button: {
    width: "90%",
    height: 60,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderStyle: "dashed",
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 23
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  uploadImage: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 42,
    marginTop: 13
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 92,
    marginLeft: 10,
    marginTop: 10
  },
  centralWallet: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    fontFamily: "roboto-700",
    marginTop: 300,
    alignSelf: "center"
  },
  logIn: {
    height: 60,
    backgroundColor: "rgba(15,86,77,1)",
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 53,
    marginRight: 53
  },
  getStarted: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-500",
    alignSelf: "center"
  }
});

export default SignUp;
