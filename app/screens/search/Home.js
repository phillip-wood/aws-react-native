import React from "react"
import { StyleSheet, Image, View } from "react-native"
import { Auth } from 'aws-amplify'

import colors from "../../config/colors"
import AppButton from "../../componets/AppButton"
import Screen from "../../componets/Screen"


export default function Home(props) {

  async function signOut() {
    try {
      await Auth.signOut();
      props.updateAuthState('loggedOut')
    } catch (error) {
      console.log('Error signing out: ', error)
    }
  }

  return (
    <Screen style={styles.container} >
        
        
            <Image style={styles.image} source={require("../../../assets/homePhoto.jpg")}/>
       


          <AppButton title="Search" onPress={() => console.log('search')} />
          <AppButton title="Logout" onPress={signOut} />
      


    </Screen>
  )
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: colors.black,
  },

  // logoContainer: {
  //   flex: .25,
  //   backgroundColor: colors.black,
  //   paddingTop: 10,
  //   width: "100%",
  //   paddingLeft: "10%",
  //   paddingRight: "10%"
  // },
  
  image: {
    width: "100%",
    resizeMode: "contain",
    },

  // text: {
  //   color: colors.white,
  //   fontSize: 20,
  //   fontWeight: "300",
  //   },
  
  // buttonsContainer: {
  //   flex: .15,
  //   backgroundColor: colors.black,
  //   paddingTop: 30,
  //   width: "100%",
  //   },
  

})