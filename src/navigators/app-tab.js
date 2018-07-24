import React, { Component } from "react";
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeStack from "./home-nav";
import PlanStack from "./plan-nav";
import FolksStack from "./folks-nav";
import { Ionicons } from '@expo/vector-icons';

import { View } from "react-native";

import DrawerCell from "../components/DrawerCell";

const AppTab = createBottomTabNavigator({
    Home: HomeStack,
    Plan: PlanStack,
    Folk: FolksStack,
}, {
        tabBarOptions: {
            activeTintColor: '#C20C0C',//active 字体颜色
            inactiveTintColor: '#999',//inactive 字体颜色
            showIcon: true,
            labelStyle: {//标签样式
                fontSize: 12,

            },
            style: {//选项卡栏样式（整体）
                height: 50,
                // paddingBottom: 5,
                // paddingTop: 5,
            },
            tabStyle: {//选项卡样式（单个）
                // borderRightColor: "#999",
                // borderRightWidth: 1,
                // backgroundColor: 'red'
            }

        },
        navigationOptions: ({ navigation }) => ({
    
            tabBarIcon: ({ focused, tintColor }) => {//图标配置
                const { routeName } = navigation.state;
                let iconName
                if (routeName == 'Home') {
                    iconName = 'md-bookmarks'
                } else if (routeName == 'Plan') {
                    iconName = 'md-clipboard'
                } else {
                    iconName = 'md-chatbubbles'
                }
                return <Ionicons name={iconName} size={20} color={tintColor} />

            }
        })
    })

    AppTab.navigationOptions={
        // drawerLockMode:'locked-closed'
        drawerLabel: <DrawerCell title='主页' icon='ios-arrow-forward' />,
    }
    export default AppTab