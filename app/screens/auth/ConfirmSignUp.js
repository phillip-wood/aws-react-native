import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Screen from '../../componets/Screen'
import AppTextInput from '../../componets/AppTextInput'
import AppButton from '../../componets/AppButton'
import { confirmAuthUser } from "../../../apis/auth"


function ConfirmSignUp({ navigation }) {
  
    const [username, setUsername] = useState('')
    const [authCode, setAuthCode] = useState('')
    
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
        <AppButton title="Confirm Sign Up" onPress={() => confirmAuthUser( username, authCode, navigation )} />
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