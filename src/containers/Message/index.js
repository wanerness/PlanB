import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native';
import DrawerCell from "../../components/DrawerCell";
import { Ionicons } from '@expo/vector-icons';
export default class Mine extends Component {
    static navigationOptions = {
        drawerLabel: <DrawerCell title='消息中心' icon='ios-arrow-forward'/>,
        // drawerLockMode:'locked-closed'
    };
    render() {
        return (<View><Text>message</Text></View>)
    }
}