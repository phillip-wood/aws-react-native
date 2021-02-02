import React from "react"
import { StyleSheet, View, FlatList, Image } from "react-native"
import { connect } from "react-redux"

import ListItemSeparator from "../../componets/ListItemSeparator"
import colors from "../../config/colors"
import Icon from "../../componets/Icon"
import Screen from "../../componets/Screen"
import ProfileSnip from '../../componets/ProfileSnip'
import ListItem from "../../componets/ListItem"

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
    title: "My Details",
    icon: {
      name: "account",
      backgroundColor: colors.primary,
    },
    targetScreen: 'UserDetails',
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

function Profile({ navigation, user }) {
  
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ProfileSnip
          title={user.username}
          image={user.picture}
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
    user:globalState.user
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
