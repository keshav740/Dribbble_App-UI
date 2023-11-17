// import React from 'react'
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CheckBox } from 'react-native-elements';

const Gender = () => {
    const [isChecked, setChecked] = useState(false);    
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/kantha.png")}
          style={styles.image}
        />
         <View>
      <CheckBox
        title="I agree to the terms and conditions"
        checked={isChecked}
        onPress={() => setChecked(!isChecked)}
      />
      <Text>{isChecked ? 'Checked!' : 'Unchecked'}</Text>
    </View> 
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      // flex: 1,
      textAlign: "center",
      //   justifyContent: 'center',
      alignItems: "center",
    },
    image: {
      width: 350,
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

export default Gender