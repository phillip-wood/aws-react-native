// import React from "react"
// import { createStackNavigator } from "@react-navigation/stack"
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// import reducers from '../../../reducers'

// import Home from '../../screens/search/Home'
// import Search from '../../screens/search/Search'
// import Profile from '../../screens/profile/Profile'
// import Logout from "../../screens/auth/Logout"
// import UserDetails from "../../screens/profile/UserDetails"
// import EditPic from "../../screens/profile/EditPic"

// const Stack = createStackNavigator()

// const AppNavigator = props => {
    
//     return (
//         <Provider store={store}>
//       <Stack.Navigator headerMode="none">
//         <Stack.Screen 
//             name="Home">
//             {screenProps => (
//             <Home {...screenProps} updateAuthState={props.updateAuthState} />
//           )}
//         </Stack.Screen>
//         <Stack.Screen 
//             name="Search">
//             {screenProps => (
//             <Search {...screenProps} updateAuthState={props.updateAuthState} />
//           )}
//         </Stack.Screen>
//         <Stack.Screen 
//             name="Profile">
//             {screenProps => (
//             <Profile {...screenProps} updateAuthState={props.updateAuthState} />
//           )}
//         </Stack.Screen>
//         <Stack.Screen 
//             name="Logout">
//             {screenProps => (
//             <Logout {...screenProps} updateAuthState={props.updateAuthState} />
//           )}
//         </Stack.Screen>
//         <Stack.Screen 
//             name="UserDetails">
//             {screenProps => (
//             <UserDetails {...screenProps} updateAuthState={props.updateAuthState} />
//           )}
//         </Stack.Screen>
//         <Stack.Screen 
//             name="EditPic">
//             {screenProps => (
//             <EditPic {...screenProps} updateAuthState={props.updateAuthState} />
//           )}
//         </Stack.Screen>
//       </Stack.Navigator>
//         </Provider>
//     )
//   }

// export default AppNavigator