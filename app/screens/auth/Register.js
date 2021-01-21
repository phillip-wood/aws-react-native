import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Auth } from 'aws-amplify'

import Screen from "../../componets/Screen"
import colors from '../../config/colors'
import AppTextInput from '../../componets/AppTextInput'
import AppButton from '../../componets/AppButton'

function Register({ navigation }) {

  // setup state to capture username email and password from inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [preferred_username, setPreferred_username] = useState('')

  // aws sign function
  async function register() {
    try {
      await Auth.signUp({ username, password, attributes: { preferred_username } })
      console.log('✅ Sign-up Confirmed')
      navigation.navigate('ConfirmSignUp')
    } 
    
    catch (error) {
      console.log('❌ Error signing up...', error)
    }
  }

  return (
    <Screen style={styles.screen}>
        <Image style={styles.logo} source={require("../../../assets/sneaked-icon-shoe-yellow.png")} />
        <View style={styles.container}>
        <Text style={styles.title}>Create a new account</Text>
        <AppTextInput
          value={username}
          onChangeText={text => setUsername(text)}
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={preferred_username}
          onChangeText={text => setPreferred_username(text)}
          leftIcon="account"
          placeholder="Enter username"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={password}
          onChangeText={text => setPassword(text)}
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppButton title="Sign Up" onPress={register} />
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgotPasswordButtonText}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
}

export default Register

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
    color: '#202020',
    fontWeight: '500',
    marginVertical: 15
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPasswordButtonText: {
    color: 'tomato',
    fontSize: 18,
    fontWeight: '600'
  }
})

