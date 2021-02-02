import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { connect } from "react-redux"

import colors from "../../config/colors"
import Screen from "../../componets/Screen"
import ProfileImageInput from "../../componets/ProfileImageInput"
import ProfileSnip from "../../componets/ProfileSnip"
import ListItem from "../../componets/ListItem"
import Icon from "../../componets/Icon"
import AppText from "../../componets/AppText"
import ListItemSeparator from "../../componets/ListItemSeparator"
import { updateAuthUserAttributes } from "../../../apis/auth"
import AppTextInput from "../../componets/AppTextInput"
import AppButton from "../../componets/AppButton"
import { s3UploadProfilePic, s3GetProfilePic } from "../../../apis/storage"


function UserDetails({ navigation, user, dispatch }) {
  //username is actually email its an aws thing
  const [preferred_username, setPreferred_username] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [preferred_usernameClicked, setPreferred_usernameClicked] = useState(false)
  const [usernameClicked, setUsernameClicked] = useState(false)
  const [passwordClicked, setPaswwordClicked] = useState(false)

return (
  <Screen style={styles.screen}>
    
    <View style={styles.container}>
        <ProfileSnip
          title={user.username}
          image={user.picture}
        />
    </View>

    <View style={styles.container}>
      <ProfileImageInput 
        onChangeImage={(uri) => s3UploadProfilePic(uri, dispatch)}
        /> 
      
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
        onPress={() => {setPreferred_usernameClicked(true)}}
        />
      
      {preferred_usernameClicked ? (
          <AppTextInput
            value={preferred_username}
            onChangeText={text => setPreferred_username(text)}
            leftIcon="account"
            placeholder="Enter New Username"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            /> 
          ): null }

      <ListItemSeparator/>

      <ListItem
        title={'Email'}
        subTitle={user.email}
        IconComponent={
          <Icon
            name={'email'}
            backgroundColor={colors.primary}
            />
          }
        onPress={() => {navigation.navigate('EditPic')}}
          />
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
        onPress={() => {setPaswwordClicked(true)}}
          />
      
    </View>
    <AppButton title="Save Changes" onPress={() => updateAuthUserAttributes('preferred_username',preferred_username)} />
  </Screen>
)
}

function mapStateToProps (globalState) {
  return {
    user:globalState.user
  }
}

export default connect(mapStateToProps)(UserDetails)

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
