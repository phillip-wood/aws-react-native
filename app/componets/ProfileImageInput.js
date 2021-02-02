import React, { useEffect } from "react"
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"

import colors from "../config/colors"

function ProfileImageInput({ onChangeImage }) {
  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) alert("You need to enable permission to access the library.")
  }

  const handlePress = () => {
    selectImage()
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.log("Error reading an image", error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
          <MaterialCommunityIcons
            color={colors.grey}
            name="camera"
            size={40}
          />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
})

export default ProfileImageInput