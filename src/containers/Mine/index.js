// import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import DrawerCell from "../../components/DrawerCell";
import { Ionicons } from '@expo/vector-icons';
 class Mine extends Component {
    static navigationOptions =({navigation})=> {
        console.warn(navigation)
        return{
            // drawerLabel: <DrawerCell title='个人中心' icon='ios-arrow-forward'/>,
            // drawerLockMode:'locked-closed'
            headerLeft: (
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <Ionicons name='ios-arrow-forward' size={20} color='#fff'></Ionicons>
                </TouchableOpacity>  )
        }
        
    };
    render() {
        return (<View><Text>mine</Text></View>)
    }
}

import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
// import { HomeConfig } from "./router-config";
const MineStack = createStackNavigator(
    {
        Mine:{
            screen:Mine
        }
    },
    {
        initialRouteName: 'Mine',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#C20C0C',
                height: 50,
            },
            headerTintColor: '#fff',
            headerTitleStyle: { flex: 1, textAlign: 'center' },

        }
    }

)

MineStack.navigationOptions = ({ navigation }) => {

    // console.warn(navigation)
    // let tabBarVisible = true
    // if (navigation.state.index > 0) {
    //     tabBarVisible = false
    // }
    return {
        
        drawerLabel: <DrawerCell title='个人中心' icon='ios-arrow-forward' />,
        drawerLockMode: 'locked-closed'
        // tabBarVisible
    }
}

export default MineStack