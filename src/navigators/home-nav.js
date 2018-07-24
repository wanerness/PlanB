import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { HomeConfig } from "./router-config";
const HomeStack = createStackNavigator(
    HomeConfig,
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#C20C0C',
                height: 50,
            },
            headerTintColor: '#fff',
            headerTitleStyle: { flex: 1, textAlign: 'center'},
            
        }
    }

)

HomeStack.navigationOptions = ({ navigation }) => {

    // console.warn(navigation)
    let tabBarVisible=true
    if(navigation.state.index>0){
        tabBarVisible=false
    }
    return {
        tabBarLabel: '我的',
        tabBarVisible
    }
}

export default HomeStack