import React, { Component } from "react";
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { PlanConfig } from "./router-config";
const PlanStack = createStackNavigator(
    PlanConfig, {
        initialRouteName: 'Plan',
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

PlanStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarLabel: '计划',
    }
}
export default PlanStack