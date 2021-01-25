import React, { useState } from "react"
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppText from "./AppText"
import Screen from "./Screen"
import defaultStyles from "../config/styles"
import AppButton from "../componets/AppButton"
import PickerItem from "./PickerItem"

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
    // set state of modal to false using hook
    const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.black}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* Invisible until Picker is Touched */}
      <Modal visible={modalVisible} animationType="slide">
          {/* Screen wrap so modal is in safe area */}
        <Screen>
            {/* Button to close modal */}
          <AppButton title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.grey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.primary,
    flex: 1,
  },
  text: {
    flex: 1,
  },

})

export default AppPicker