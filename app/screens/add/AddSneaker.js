import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { connect } from "react-redux"

import Screen from "../../componets/Screen"
import { dbCreateUserSneaker } from '../../../apis/database'
import AppButton from "../../componets/AppButton"

function AddSneaker({ user }) {
 
  const user_id = user.id
  const [condition, setCondition] = useState('deadstock')
  const [images, setImages] = useState(['https://cdn.kickscrew.com/media/catalog/product/cache/594c626c8d74b0c1b094d7dea46082f9/C/D/CD4991-500_Nike_Kobe_5_Protro_Lakers_a.jpg','https://cdn.kickscrew.com/media/catalog/product/cache/594c626c8d74b0c1b094d7dea46082f9/C/D/CD4991-500a.jpg'])
  const sneaker_id = "3f39a26e-6186-4264-8b51-97f3c5def8d8"

  return (
    <Screen style={styles.container}>
      <AppButton title={'Add sneaker'} onPress={() => dbCreateUserSneaker( user_id, condition, images, sneaker_id )}/>
    </Screen>
  )
}

function mapStateToProps (globalState) {
  return {
    user:globalState.user
  }
}

export default connect(mapStateToProps)(AddSneaker)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
