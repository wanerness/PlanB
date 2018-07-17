import React, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthLoadingScreen from "./containers/Auth-Loading";


import AuthStack from "./navigators/auth-stack";
import MyApp from "./navigators/my-app-drawer";


const SwitchNav = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: MyApp,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
)

export default class Router extends Component {
    render() {
        return (<SwitchNav />)
    }
}




