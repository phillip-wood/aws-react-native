import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { connect } from "react-redux"

import colors from "../../config/colors"
import Screen from "../../componets/Screen"
import ProfileSnip from "../../componets/ProfileSnip"
import ListItem from "../../componets/ListItem"
import Icon from "../../componets/Icon"
import AppText from "../../componets/AppText"
import ListItemSeparator from "../../componets/ListItemSeparator"
import { updatePreferred_username, updatePassword } from "../../../apis/auth"
import AppTextInput from "../../componets/AppTextInput"
import AppButton from "../../componets/AppButton"
// import ProfileImageInput from "../../componets/ProfileImageInput"
// import { s3UploadProfilePic } from "../../../apis/storage"


function EditProfile({ navigation, user, dispatch }) {

  const [preferred_username, setPreferred_username] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [preferred_usernameClicked, setPreferred_usernameClicked] = useState(false)
  const [passwordClicked, setPasswordClicked] = useState(false)


return (
  <Screen style={styles.screen}>
    
    <View style={styles.container}>
        <ProfileSnip
          title={user.username}
          image={user.picture}
        />
    </View>

    <View style={styles.container}>
      {/* <ProfileImageInput 
        onChangeImage={(uri) => s3UploadProfilePic(uri, dispatch)}
        /> 
       */}
      <AppText>Account Details</AppText>
      
      <ListItem
        title={'Username'}
        subTitle={user.username}
        IconComponent={
          <Icon
            name={'account'}
            backgroundColor={colors.primary}
            />
          }
        onPress={() => {setPreferred_usernameClicked( prevPreferred_usernameClicked => !prevPreferred_usernameClicked )}}
        />
      
      {preferred_usernameClicked ? (
        <View>
        <AppTextInput
        value={preferred_username}
        onChangeText={text => setPreferred_username(text)}
        leftIcon="account"
        placeholder="Enter New Username"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        /> 
        <AppButton title="Save Changes" onPress={() => {
          updatePreferred_username( preferred_username, dispatch, navigation )
          setPreferred_usernameClicked( prevPreferred_usernameClicked => !prevPreferred_usernameClicked )}} />
        </View>
          ): null }

      <ListItemSeparator/>

      <ListItem
        title={'Password'}
        subTitle={'***********'}
        IconComponent={
          <Icon
            name={'key'}
            backgroundColor={colors.primary}
            />
          }
        onPress={() => { setPasswordClicked( prevPasswordClicked => !prevPasswordClicked )}}
          />
      {passwordClicked ? (
        <View>
        <AppTextInput
          value={oldPassword}
          onChangeText={text => setOldPassword(text)}
          leftIcon="lock"
          placeholder="Enter Exsisting Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppTextInput
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
          leftIcon="lock"
          placeholder="Enter New Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppButton title="Save Changes" onPress={() => {
          updatePassword( oldPassword, newPassword )  
          setPasswordClicked( prevPasswordClicked => !prevPasswordClicked)}} />
        </View>
          ): null }
      
    </View>
  </Screen>
)
}

function mapStateToProps (globalState) {
  return {
    user:globalState.user
  }
}

export default connect(mapStateToProps)(EditProfile)

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 10
  },
  container: {
    marginVertical: 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
})
