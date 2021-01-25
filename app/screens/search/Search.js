import React, {useState} from "react"
import { StyleSheet } from "react-native"
import { connect } from "react-redux"

import Screen from "../../componets/Screen"
import AppPicker from "../../componets/AppPicker"
import AppButton from "../../componets/AppButton"

function Search(props) {

    const brands = []
    let models = []
    let submodels = []

    for(let i = 0; i < props.sneakers.length; i++){
        brands.push({value:i, label:props.sneakers[i]['brand']})
    }

    // setup state to capture username email and password from inputs
  const [brand, setBrand] = useState('brand')
  const [model, setModel] = useState('model')
  const [submodel, setSubmodel ] = useState('submodel')

  return (
    <Screen style={styles.container}>
        <AppPicker items={brands} name="brand" placeholder={brand} onSelectItem={text => setBrand(text.label)}/>
        <AppPicker items={brands} name="model" placeholder={model} onSelectItem={text => setModel(text.label)}/>
        <AppPicker items={brands} name="submodel" placeholder={submodel} onSelectItem={text => setSubmodel(text.label)} />
        <AppButton title='Search' />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

function mapStateToProps (globalState) {
    return {
      sneakers: globalState.sneakers
    }
}
  
export default connect(mapStateToProps)(Search)