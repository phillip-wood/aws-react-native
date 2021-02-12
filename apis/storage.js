import { Storage } from 'aws-amplify'
import uuid from 'react-native-uuid'

//-----CREATE-----//
export async function s3CreateImage( uri, folderName ) {
    Storage.configure({ level: 'protected' })
    const fileName = (folderName === "sneaker-pics") ? uuid.v1(): "profile-picture"
    const response = await fetch( uri )
    const blob = await response.blob()
    
    return Storage
        .put(`${folderName}/${fileName}.jpeg`, blob, { contentType: 'image/jpeg' })
        .then( response => { return s3CreateImageLink( response.key )})
        .then( link => { return link })
        .catch( error => console.log( '❌ Error Uploading ', error ))  
}

//need this aws image link for each new picture
export async function s3CreateImageLink(key) {
    Storage.configure({ level: 'protected' })
    
    return Storage
        .get( key )
        .then( link => { return link })
        .catch( error => console.log( '❌ Error Getting Image Link', error ))   
} 

//-----READ-----//
export async function s3ListUserSneakerPics() {
    Storage.configure({ level: 'protected' })
    
    return Storage
        .list('profile-pics/')
        .then( result => console.log( result ))
        .catch( error => console.log( '❌ Error Listing Images', error ))
}