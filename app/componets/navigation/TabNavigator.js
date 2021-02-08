import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AccountNavigator from "./AccountNavigator"
import SearchNavigator from "./SearchNavigator"
import AddSneaker from "../../screens/add/AddSneaker"
import NewSneakerButton from "./NewSneakerButton"
import routes from "./routes"

const Tab = createBottomTabNavigator()

const TabNavigator = () => (

    <Tab.Navigator>
       
        <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        }}
        />

        <Tab.Screen
        name="AddSneaker"
        component={AddSneaker}
        options={({ navigation }) => ({
            tabBarButton: () => (
            <NewSneakerButton
                onPress={() => navigation.navigate(routes.ADD_SNEAKER)}
            />
            ),
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
            />
            ),
        })}
        />
        <Tab.Screen
        name="Profile"
        component={AccountNavigator}
        options={{
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
        }}
        />
    </Tab.Navigator>
    
)

export default TabNavigator