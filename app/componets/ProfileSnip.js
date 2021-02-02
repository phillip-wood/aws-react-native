import React from "react"
import { View, StyleSheet, Image, TouchableHighlight } from "react-native"
import AppText from "./AppText"

import colors from "../config/colors"

function ProfileSnip({ onPress, image, title, subTitle }) {
  return (
    <TouchableHighlight 
    onPress={onPress}
    underlayColor = {colors.grey}>
    <View style={styles.container}>
      
      <Image style={styles.image} source={{uri:image}} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
    color: colors.black
  },
})

export default ProfileSnip