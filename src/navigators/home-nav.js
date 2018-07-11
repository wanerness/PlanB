import React, { Component } from "react";
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { HomeConfig } from "./router-config";
const HomeStack = createStackNavigator(
    HomeConfig, {
        initialRouteName:'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
                height: 40,
            },
            headerTintColor: '#fff',
            headerTitleStyle: { flex: 1, textAlign: 'center' },
        }
    }

)

export default HomeStack