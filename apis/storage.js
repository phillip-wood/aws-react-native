import { Storage } from 'aws-amplify'

export async function s3ListUserSneakerPics() {
    Storage.configure({ level: 'protected' })
    Storage.list('profile-pics/')
        .then( result => console.log(result))
        .catch( error => console.log('❌ Error Listing Images', error))
}

export async function s3UploadProfilePic( uri, dispatch ) {
    Storage.configure({ level: 'protected' })
    const response = await fetch( uri )
    const blob = await response.blob()
    Storage.put('profile-pics/profile-picture.jpeg', blob, { contentType: 'image/jpeg', })
        .then( response => s3GetImageLink( response.key ))
        .then( link => console.log( link ))
        .catch( error => console.log('❌ Error Uploading ', error) )  
}

export async function s3GetImageLink(key) {
    try{
        Storage.configure({ level: 'protected' })
        const link = await Storage.get(key)
        return link
    }
    catch (err) {
        console.log('❌ Error Getting Image Link',err)
    }   
} 


// Storage.configure({ level: 'protected' })

// Storage.list('profile-pics/', { level: 'protected' })
// .then(result => console.log(result))
// .catch(err => console.log(err))

// const [picture, setPicture] = useState(user.picture)

// const uploadToStorage = async pathToImageFile => {
//   try {
//     const response = await fetch(pathToImageFile)
//     console.log(response)
//     const blob = await response.blob()
//     console.log(blob)
//     Storage.put(`profile-pics/til.jpeg`, blob, {
//       contentType: 'image/jpeg',
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// const getfromStorage = async () => {
//   try {
//     const response = await Storage.get('profile-pics/til.jpeg')
//     setPicture(response)
//     }
//   catch (err) {
//     console.error('error accessing the user image',err)
//   }
// }

// getfromStorage()
// console.log(picture)

// const handleAdd = (uri) => {
// uploadToStorage(uri)

// }


// const getfromStorage = async () => {
//     try {
//       const response = await Storage.get('profile-pics/profile-picture.jpeg')
//       .then(updateAuth(response)
//     }
//     catch (err) {
//       console.error('error accessing the user image',err)
//     }
//   }
