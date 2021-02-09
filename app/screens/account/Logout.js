import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"
import { Auth } from 'aws-amplify'

import Screen from "../../componets/Screen"
import colors from '../../config/colors'

import AppButton from '../../componets/AppButton'


function Logout({ updateAuthState }) {

    async function signOut() {
        try {
          await Auth.signOut()
            updateAuthState('loggedOut')
        } catch (error) {
            console.log('Error signing out: ', error)
        }
      }

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../../../assets/sneaked-icon-shoe-yellow.png")} />
      <View style={styles.container}>
        <Text style={styles.title}>Later Gator!</Text>
        <AppButton title="Logout" onPress={signOut} />
      </View>
    </Screen>
  )
}

export default Logout

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.black,
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: '500',
    marginVertical: 15
  },
})