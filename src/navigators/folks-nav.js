import React, { Component } from "react";
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { FolksScreen } from "./router-config";
const FolksStack = createStackNavigator(
    FolksScreen, {
        initialRouteName: 'Folks',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#C20C0C',
                height: 40,
            },
            headerTintColor: '#fff',
            headerTitleStyle: { flex: 1, textAlign: 'center' },
        }
    }
)

FolksStack.navigationOptions = ({ navigation }) => {

    // console.warn(navigation)
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarLabel: '我的',
        tabBarVisible
    }
}

export default FolksStack