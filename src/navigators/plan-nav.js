import React, { Component } from "react";
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { PlanConfig } from "./router-config";
const PlanStack = createStackNavigator(
    PlanConfig, {
        initialRouteName: 'Plan',
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

export default PlanStack