import React from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScree from "../HomeScree";
// import {getImage} from '../../assets/getstartedimg'

const GetStarted = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/getstartedimg.jpeg")}
          style={styles.image}
        />
        <TouchableOpacity style={styles.Button}>
        <Text style={styles.buttonText}>Get Started !</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    // flex: 1,
    textAlign: "center",
    //   justifyContent: 'center',
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  Button:{
    backgroundColor:'#0c6cb0',
    marginTop:150,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    borderRadius: 10,
  },
  buttonText:{
    // color:'white',
    fontWeight:'bold',
    fontSize:24,
  }
});

export default GetStarted;
