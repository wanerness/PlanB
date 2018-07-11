import React,{ Component } from "react";
import { createSwitchNavigator,createBottomTabNavigator,createStackNavigator } from "react-navigation";

// export {default} from "./routes";

import HomeScreen from "./containers/Home";
import PlanScreen from "./containers/Plan";
import FolkScreen from "./containers/Folk";
import LoginScreen from "./containers/Login";
import AuthLoadingScreen from "./containers/Auth-Loading";

import HomeStack from "./navigators/home-nav";
import PlanStack from "./navigators/plan-nav";
import FolksStack from "./navigators/folks-nav";

//主页tab
const AppTab = createBottomTabNavigator({
    Home: HomeStack, 
    Plan: PlanStack,
    Folk: FolksStack,
})

//登录相关stack
const AuthStack = createStackNavigator({
    Login: LoginScreen,
})

const SwitchNav = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppTab,
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




