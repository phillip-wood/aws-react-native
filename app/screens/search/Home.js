import React, { useEffect } from "react"
import { StyleSheet, Image} from "react-native"
import { connect } from "react-redux"

import colors from "../../config/colors"
import AppButton from "../../componets/AppButton"
import Screen from "../../componets/Screen"
import { readAuthUser } from "../../../apis/auth"
import { dbReadSneakers, dbReadUserInfo, dbReadUserSneakers } from "../../../apis/database"

function Home({ dispatch, navigation, authUser }) {

  useEffect(() => { 
    dispatch( readAuthUser() )
    dispatch( dbReadSneakers() )
  }, [])

  useEffect(() => {
    if ( authUser.id ) {
      dispatch( dbReadUserSneakers( authUser.id ))
      dispatch( dbReadUserInfo( authUser.id ) )
    }
  }, [ authUser ])

  return (
    <Screen style={styles.container} >
      <Image style={styles.image} source={require("../../../assets/homePhoto.jpg")}/>
        <AppButton title="Search" onPress={() => navigation.navigate('Search')} />
    </Screen>
  )
}

function mapStateToProps (globalState) {
  return {
    sneakers: globalState.sneakers,
    authUser: globalState.authUser
  }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: colors.white,
  },
  
  image: {
    flex: .4,
    width: "100%",
    resizeMode: "contain",
    },

})