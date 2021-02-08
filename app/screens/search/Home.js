import React, { useEffect } from "react"
import { StyleSheet, Image} from "react-native"

import colors from "../../config/colors"
import AppButton from "../../componets/AppButton"
import Screen from "../../componets/Screen"

import { fetchAuthUser, fetchSneakers, fetchUserSneakers } from "../../../actions"
import { connect } from "react-redux"

function Home({ dispatch, navigation, user }) {

  useEffect(() => { 
    dispatch( fetchAuthUser() )
    dispatch( fetchSneakers() )
  }, [])

  useEffect(() => {
    if (user.id) dispatch(fetchUserSneakers(user.id))
  }, [user])

  return (
    <Screen style={styles.container} >
      <Image style={styles.image} source={{uri:require("../../../assets/homePhoto.jpg")}}/>
        <AppButton title="Search" onPress={() => navigation.navigate('Search')} />
    </Screen>
  )
}

function mapStateToProps (globalState) {
  return {
    sneakers: globalState.sneakers,
    user: globalState.user
  }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: colors.white,
  },

  // logoContainer: {
  //   flex: .25,
  //   backgroundColor: colors.black,
  //   paddingTop: 10,
  //   width: "100%",
  //   paddingLeft: "10%",
  //   paddingRight: "10%"
  // },
  
  image: {
    flex: ".4",
    width: "100%",
    resizeMode: "contain",
    },

  // text: {
  //   color: colors.white,
  //   fontSize: 20,
  //   fontWeight: "300",
  //   },
  
  // buttonsContainer: {
  //   flex: .15,
  //   backgroundColor: colors.black,
  //   paddingTop: 30,
  //   width: "100%",
  //   },
  

})