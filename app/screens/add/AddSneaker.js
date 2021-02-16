import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { connect } from "react-redux"

import Screen from "../../componets/Screen"
import { dbCreateUserSneaker } from '../../../apis/database/userSneakers'
import AppButton from "../../componets/AppButton"
import AppPicker from "../../componets/AppPicker"
import ImageInputList from "../../componets/ImageInputList"
import { s3CreateImage } from "../../../apis/storage"

function AddSneaker({ authUser, sneakers }) {

  const [images, setImages ] = useState([])
  const [brand, setBrand] = useState('brand')
  const [model, setModel] = useState('model')
  const [submodel, setSubmodel ] = useState('submodel')
  const [condition, setCondition] = useState('condition')
  const user_id = authUser.id
  

  let brands = [{id:1, label:'nike'}, {id:2, label:'adidas'}, {id:3, label:'air jordan'}, {id:4, label:'yeezy'}, {id:5, label:'converse'}, {id:6, label:'new balance'}, {id:7, label:'puma'}, {id:8, label:'reebok'}, {id:9, label:'under armour'}, {id:10, label:'vans'}]
  let models = pickerList ( sneakers, 'brand', 'model' )
  let submodels = pickerList ( sneakers, 'model', 'submodel' )
  let conditions = [{ id:1, label:'Deadstock'}, {id:2, label:'VNDS'}, {id:3, label:'Worn'}, {id:4, label:'Beaters'}]

  function pickerList ( array, key1, key2 ) {
    let newArray = []
    let state = (key1 === 'brand') ? brand : model 
    array.map( (sneaker, index) => { if ( sneaker[key1] === state ){ newArray.push ( { id: index, label: sneaker[key2] } ) } } )
    const newArray2 = [...new Map(newArray.map(item => [item.label, item])).values()]
    return newArray2
  }

  const handleAdd = (uri) => {
    setImages(prevArray =>[...prevArray,uri])
  }

  const handleRemove = (uri) => {
    setImages(
      images.filter((imageUri) => imageUri !== uri)
    )
  }

  const handleUploadNewUserSneaker = async () => {
    let imageLinks = [] 
    for (let i=0; i<images.length; i++){
      let link = await s3CreateImage(images[i], "sneaker-pics")
      imageLinks.push(link)
    }
    const sneakerFind = await sneakers.find(sneaker => sneaker.brand === brand && sneaker.model === model && sneaker.submodel === submodel)
    const userSneakerSneakerId = sneakerFind.id
    dbCreateUserSneaker( user_id, condition, imageLinks, userSneakerSneakerId )
  }

  return (
    <Screen style={styles.container}>
      <ImageInputList imageUris ={images} onRemoveImage={handleRemove} onAddImage={handleAdd}/>
      <AppPicker items={brands} name="brand" placeholder={brand} onSelectItem={text => setBrand(text.label)} />
      <AppPicker items={models} name="model" placeholder={model} onSelectItem={text => setModel(text.label)} />
      <AppPicker items={submodels} name="submodel" placeholder={submodel} onSelectItem={text => setSubmodel(text.label)} />
      <AppPicker items={conditions} name="condition" placeholder={condition} onSelectItem={text => setCondition(text.label)} />
      <AppButton title={'Add sneaker'} onPress={() => handleUploadNewUserSneaker()}/>
    </Screen>
  )
}

function mapStateToProps (globalState) {
  return {
    authUser: globalState.authUser,
    sneakers: globalState.sneakers 
  }
}

export default connect(mapStateToProps)(AddSneaker)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
