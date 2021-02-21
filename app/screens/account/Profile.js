import React, { useEffect } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import { connect } from "react-redux"

import ListItemSeparator from "../../componets/ListItemSeparator"
import colors from "../../config/colors"
import Icon from "../../componets/Icon"
import Screen from "../../componets/Screen"
import ProfileSnip from '../../componets/ProfileSnip'
import ListItem from "../../componets/ListItem"
import { dbReadUserConversations } from "../../../apis/database/conversation"

const menuItems = [
  {
    title: "My Collection",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: 'Home',
  },
  {
    title: "My Messages",
    icon: {
      name: "message",
      backgroundColor: colors.primary,
    },
    targetScreen: 'Messages',
  },
  {
    title: "My Details",
    icon: {
      name: "account",
      backgroundColor: colors.primary,
    },
    targetScreen: 'EditProfile',
  },
  {
    title: "Log Out",
    icon: {
      name: "logout",
      backgroundColor: colors.primary,
    },
    targetScreen: 'Logout',
  },
]

function Profile({ navigation, authUser, userInfo, dispatch }) {

  useEffect(() => {
    if ( authUser.id ) {
      dispatch( dbReadUserConversations( authUser.id )) 
    }
  }, [ authUser ])

  // useEffect(() => {
  //   if ( authUser.id ) {
  //     dispatch( dbReadUserConversations( authUser.id )) 
  //   }
  // }, [ authUser ])
  
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ProfileSnip
          title={authUser.username}
          image={userInfo.image}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => {navigation.navigate(item.targetScreen)}}
            />
          )}
        />
      </View>
    </Screen>
  )
}

function mapStateToProps (globalState) {
  return {
    authUser:globalState.authUser,
    userInfo:globalState.userInfo
  }
}

export default connect(mapStateToProps)(Profile)

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 10,
  },
  container: {
    marginVertical: 20,
  },
})
