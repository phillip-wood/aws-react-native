import React from "react"
import { FlatList, StyleSheet} from "react-native"
import { connect } from "react-redux"

import ListItem from "../../componets/ListItem"
import Screen from "../../componets/Screen"
import ListItemSeparator from "../../componets/ListItemSeparator"

const messages = [
  // {
  //   id: 1,
  //   title: "T1",
  //   description: "D1",
  //   image: require("../../assets/user1.png"),
  // },
  // {
  //   id: 2,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../../assets/user1.png"),
  // },
]

function Messages(props) {

  return (
     <Screen>

        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
                <ListItem 
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}
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
    user:globalState.user
  }
}

export default connect(mapStateToProps)(Messages)

const styles = StyleSheet.create({})