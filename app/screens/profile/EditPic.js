import React, {useState} from "react"
import { StyleSheet, View} from "react-native"
import { connect } from "react-redux"

import colors from "../../config/colors"
import Screen from "../../componets/Screen"
import ProfileImageInput from "../../componets/ProfileImageInput"
import ProfileSnip from "../../componets/ProfileSnip"
import AppText from "../../componets/AppText"
import { s3UploadProfilePic, s3GetProfilePic } from "../../../apis/storage"

function Editpic({ navigation, user }) {

    const [picture, setPicture] = useState(user.picture)
    const test = s3GetProfilePic()

return (
  <Screen>
    <View style={styles.container}>
        <ProfileSnip
          title={user.username}
          image={'https://sneakedbucket212939-staging.s3.ap-southeast-2.amazonaws.com/protected/ap-southeast-2%3Ad4e77da8-346a-4ee2-8588-ed54f17b8638/profile-pics/profile-picture.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAT527P4EIU2DCTBF3%2F20210202%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20210202T005446Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhALKLZVyVKT6dMs%2BeoHw0FTCf2J1aSrftF7VxmAx8JH77AiEA78iyqQl5Rkhb%2FQd%2Frhm4EVx21eOfW%2BOpfyeXmb2Db28q6wQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzAyNDYzMzg4MzMiDCjGOZEvhdWv6wA4tiq%2FBKDpFjNjQTtpBLPKqSpM4cm%2B2XwI8v4tUUxvoWbLm1kbPz%2BOdGqk9e3djj63pHyVjthaHBa4hg9mMHGaoc8VkH7G3VCbM6faHn3vLUlaCXMZVZjofaDYEoBD8Xjb3mC70u7%2BiQoH8usHqHRoXXwxvdL%2BLrKwCAiH%2F3oUNdwarE9aqqQQ3U3qpvE5eSF9Ug0SMmmJZ5d%2B5cyIK3o3mhmm%2BOoL1Kr0llFEnxm9dxQbtKMvLBbqEZUXoiIDcZGJP6PjHGDpXkhRGnMCpqpjEeow6DJhfCcGD6Lv9Y8SeEpwA9tP6pF4jPefPWdzBoyX3kO3NxzBaZYpHbq%2BV9sUVcvlI0CgxFMSnAFUeb9n9EZolNZp%2Bzq6iA7voyxBNsTYok6XNb%2BziZZIAQTvytJ58itaIE4Fx68f0MLGJgbkNUhhpYUaofcnFtIg84TSEJQi85rqpHKcxdoq3pTdEwrabDgZk7UyKPuF2l%2FBMTt%2BXFTnDexuHbnGdUVqlARQX%2BzF068PZp6447j05ZBbkW7tmJohJ4l4q9ZFOi9nasdAI1JjIh%2BhHlZcp8gtN5CK%2FBY9IvnflGivuKcl1bucGO55BgJlGbkcK6VQz1g1HRvYBrPNcOG5v5jIJKrCpu%2Br%2BfdyRRDXbUOf2C8nDpocR3XjXq%2BAKpn10Q4Mh96OXddJM4QUv%2FwLejMIGB60xrYgq3RXQaQDRqmSRiCQZ1U0NiAQS4M1J5N4SvT60dwklOgVra80vW5UkmHEYq0B%2FGIVXSAjTWHIMNbF4oAGOoQCISmWId5j6kDklk%2FCghtNp8N9P7ONgFAc55baDk4O7wd1z0u8kQlWzB12cAk8sTQc3MpKPOjv2ZhXKM900zqLA1CMk1qUvee2ocie7GzkGXuod6UEZmJ4cj1txBXS1WpSUGmQySGeJEMWwEpGj113WvVviQOtLZA3tFC6RL37yUe8VAluXFGIradzjRsgiqXsi1tZ6IhnXBncu9ma5xXI%2FgplkE27Gtjujrwo2FxcEBuHRvRMJpsNfdVgd1fccJwUDyMPhVeclTbJ3WBkjIUsZku%2BIPNaoP64gfXfyPFMLNHg7rXqLUhwMn6MCH6vCQXwJdfbi2m7hQDKQCBLnHfcAOLfZyo%3D&X-Amz-Signature=abf9f36cf4dead9063a32ef84a2b9cb122391a6d8a02448e222cf16f32717a16&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js-v3-%40aws-sdk%2Fclient-s3%2F1.0.0-rc.4%20Mozilla%2F5.0%20%28iPhone%3B%20CPU%20iPhone%20OS%2013_2_3%20like%20Mac%20OS%20X%29%20AppleWebKit%2F605.1.15%20%28KHTML%2C%20like%20Gecko%29%20Version%2F13.0.3%20Mobile%2F15E148%20Safari%2F604.1%20aws-amplify%2F3.8.8%20js&x-id=GetObject'}
        />
      </View>
    <View style={styles.container}>
        <AppText>Click the camera Icon below to upload new profile picture</AppText>
        <ProfileImageInput
        style={styles.imageInput} 
        onChangeImage={(uri) => s3UploadProfilePic(uri)}
        /> 
    </View>

  </Screen>
)
}

function mapStateToProps (globalState) {
  return {
    user:globalState.user
  }
}

export default connect(mapStateToProps)(Editpic)

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  container: {
    marginVertical: 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
})