import React from "react"
import { FlatList, StyleSheet} from "react-native"
import { connect } from "react-redux"

import ListItem from "../../componets/ListItem"
import Screen from "../../componets/Screen"
import ListItemSeparator from "../../componets/ListItemSeparator"


function Messages({ userMessages }) {

  const messages = userMessages
  const oneMess = messages[0].body[0]["message"]
  console.log(oneMess)
  return (
     <Screen>

        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
                <ListItem 
                    title={item.subject}
                    subTitle={item.body}
                    // image={item.image}
                    onPress={() => console.log("Message Selected", item)}
                    /> 
                  }
            ItemSeparatorComponent={ListItemSeparator}
        />
    </Screen> 
  )
}

function mapStateToProps (globalState) {
  return {
    user: globalState.user,
    userMessages: globalState.userMessages 
  }
}

export default connect(mapStateToProps)(Messages)

const styles = StyleSheet.create({})