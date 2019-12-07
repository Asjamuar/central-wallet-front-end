import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView
} from "react-native";

function Log(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(6,141,122,1)" }}>
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.log}>Log</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.travelLog}>
              <View style={styles.dateInfo}>
                <Text style={styles.currentDate}>Current Date</Text>
              </View>
              <View style={styles.amount}>
                <Text style={styles.loremIpsum}>$20</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6,141,122,1)",
    justifyContent: "space-between",
    borderColor: "#000000",
    borderWidth: 0,
    borderBottomWidth: 0,
    marginTop: 20
  },
  header: {
    height: 80,
    alignSelf: "stretch",
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  log: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "roboto-500",
    textAlign: "center",
    alignSelf: "center"
  },
  scrollArea: {
    flex: 1,
    alignSelf: "stretch"
  },
  scrollArea_contentContainerStyle: {
    flex: 1,
    height: "100%"
  },
  travelLog: {
    height: 90,
    flexDirection: "row",
    alignSelf: "stretch",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderBottomWidth: 1
  },
  dateInfo: {
    flex: 0.7
  },
  currentDate: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 35,
    marginLeft: 30
  },
  amount: {
    flex: 0.3,
    justifyContent: "center"
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center",
    alignSelf: "center"
  }
});

export default Log;
