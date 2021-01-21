import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Auth } from 'aws-amplify'

import Screen from '../../componets/Screen'
import AppTextInput from '../../componets/AppTextInput'
import AppButton from '../../componets/AppButton'


function ConfirmSignUp({ navigation }) {
  
    const [username, setUsername] = useState('')
    const [authCode, setAuthCode] = useState('')
    
    async function confirmSignUp() {
        try {
        await Auth.confirmSignUp(username, authCode)
        console.log('✅ Code confirmed')
        navigation.navigate('Login')
        } catch (error) {
        console.log(
            '❌ Verification code does not match. Please enter a valid verification code.',
            error.code
        )
        }
    }
return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Sign Up</Text>
        <AppTextInput
          value={username}
          onChangeText={text => setUsername(text)}
          leftIcon="account"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={authCode}
          onChangeText={text => setAuthCode(text)}
          leftIcon="numeric"
          placeholder="Enter verification code"
          keyboardType="numeric"
        />
        <AppButton title="Confirm Sign Up" onPress={confirmSignUp} />
      </View>
    </Screen>
  )
}

export default ConfirmSignUp

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: 'white'
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
    }
  })