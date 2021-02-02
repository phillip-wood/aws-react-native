import React, { useState } from "react"
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native"
import { Auth } from 'aws-amplify'

import Screen from "../../componets/Screen"
import colors from '../../config/colors'

import AppTextInput from '../../componets/AppTextInput'
import AppButton from '../../componets/AppButton'


function Login({ navigation, updateAuthState }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      console.log('Success')
      updateAuthState('loggedIn')
    } catch (error) {
      console.log('Error signing in...', error)
    }
  }

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../../../assets/sneaked-icon-shoe-yellow.png")} />
      <View style={styles.container}>
        <Text style={styles.title}>Sign in to your account</Text>
        <AppTextInput
          value={username}
          onChangeText={text => setUsername(text)}
          leftIcon="account"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={password}
          onChangeText={text => setPassword(text)}
          leftIcon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppButton title="Login" onPress={signIn} />
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.forgotPasswordButtonText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
}

export default Login

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
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPasswordButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600'
  }
})

