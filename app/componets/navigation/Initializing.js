import React from 'react'
import { ActivityIndicator, StyleSheet } from "react-native"

import Screen from '../../componets/Screen'
import colors from '../../config/colors'

function Initializing() {
    return (
      <Screen style={styles.screen}>
        <ActivityIndicator size="large" color={colors.primary} />
      </Screen>
      )
}

export default Initializing

const styles = StyleSheet.create({
    
    screen: {
        backgroundColor: colors.black,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
 
})
