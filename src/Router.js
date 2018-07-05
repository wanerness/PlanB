import React,{ Component } from "react";
import { createSwitchNavigator,createBottomTabNavigator,createStackNavigator } from "react-navigation";

// export {default} from "./routes";

import HomeScreen from "./containers/Home";
import PlanScreen from "./containers/Plan";
import FolkScreen from "./containers/Folk";
import LoginScreen from "./containers/Login";
import AuthLoadingScreen from "./containers/Auth-Loading";

const HomeTab = createBottomTabNavigator({
    Home: HomeScreen, 
    Plan: PlanScreen,
    Folk: FolkScreen,
})

const AppStack = createStackNavigator({
    Home: HomeTab,
})
const AuthStack = createStackNavigator({
    Login: LoginScreen,
})

const SwitchNav = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
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




