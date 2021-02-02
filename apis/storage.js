import { Storage } from 'aws-amplify'
import { updateUser } from '../actions/index' 

export async function s3ListUserSneakerPics() {
    try {
        Storage.list('profile-pics/', { level: 'protected' })
            .then(result => console.log(result))
        } 
    catch (error) {
            console.log('❌ Error Getting Images', error)
        }
}

export async function s3UploadProfilePic(uri, dispatch) {
    Storage.configure({ level: 'protected' })
    try {
        const response = await fetch(uri)
        const blob = await response.blob()
        Storage.put(`profile-pics/profile-picture.jpeg`, blob, {
            contentType: 'image/jpeg', })
            .then(response => s3GetProfilePic(response.key, dispatch))
        } 
    catch (error) {
        console.log('❌ Error Uploading Profile Picture', error)
        }
}

export async function s3GetProfilePic(key, dispatch) {
    Storage.configure({ level: 'protected' })
    try {
        Storage.get(key)
            .then(response => dispatch(updateUser(response)))
        } 
    catch (error) {
        console.log('❌ Error Getting Profile Picture', error)
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
