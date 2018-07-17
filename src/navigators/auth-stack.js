import { createStackNavigator } from "react-navigation";
import LoginScreen from "../containers/Login"
//登录相关stack
const AuthStack = createStackNavigator({
    Login: LoginScreen,
})

export default AuthStack
 
