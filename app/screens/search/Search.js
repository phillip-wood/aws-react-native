import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { connect } from "react-redux"

import Screen from "../../componets/Screen"
import AppPicker from "../../componets/AppPicker"
import AppButton from "../../componets/AppButton"
import { setSearch } from "../../../actions"


function Search({ sneakers, dispatch, navigation }) {
  
  const [brand, setBrand] = useState('brand')
  const [model, setModel] = useState('model')
  const [submodel, setSubmodel ] = useState('submodel')

  let brands = [{id:1, label:'nike'}, {id:2, label:'adidas'}, {id:3, label:'air jordan'}, {id:4, label:'yeezy'}, {id:5, label:'converse'}, {id:6, label:'new balance'}, {id:7, label:'puma'}, {id:8, label:'reebok'}, {id:9, label:'under armour'}, {id:10, label:'vans'}]
  let models = pickerList ( sneakers, 'brand', 'model' )
  let submodels = pickerList ( sneakers, 'model', 'submodel' )

  function pickerList ( array, key1, key2 ) {
    let newArray = []
    let state = (key1 === 'brand') ? brand : model 
    array.map( (sneaker, index) => { if ( sneaker[key1] === state ){ newArray.push ( { id: index, label: sneaker[key2] } ) } } )
    const newArray2 = [...new Map(newArray.map(item => [item.label, item])).values()]
    return newArray2
  }

  function onSubmit () {
    dispatch(setSearch( { brand:brand, model:model, submodel:submodel }))
    navigation.navigate('Home')
  }

  return (
    <Screen style={styles.container}>
        <AppPicker items={brands} name="brand" placeholder={brand} onSelectItem={text => setBrand(text.label)} />
        <AppPicker items={models} name="model" placeholder={model} onSelectItem={text => setModel(text.label)} />
        <AppPicker items={submodels} name="submodel" placeholder={submodel} onSelectItem={text => setSubmodel(text.label)} />
        <AppButton title='Search' onPress={() => onSubmit()}/>
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