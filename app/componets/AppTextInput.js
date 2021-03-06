import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
        {/* Conditional Render */}
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.black}
          style={styles.icon}
        />
      )}
      <TextInput 
      placeholderTextColor={defaultStyles.colors.black}
      style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
})

export default AppTextInput