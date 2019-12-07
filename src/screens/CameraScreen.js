import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: {},
      type: Camera.Constants.Type.back
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    console.log(this.state);
    if (hasCameraPermission === {}) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={async () => {
                  if (this.camera) {
                    let photo = await this.camera.takePictureAsync(1);
                  }
                  // this.setState({
                  //   type:
                  //     this.state.type === Camera.Constants.Type.back
                  //       ? Camera.Constants.Type.front
                  //       : Camera.Constants.Type.back
                  // });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

export default CameraScreen;
