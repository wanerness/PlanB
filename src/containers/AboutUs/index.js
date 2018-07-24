import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native';
import DrawerCell from "../../components/DrawerCell";
import { Ionicons } from '@expo/vector-icons';
export default class Mine extends Component {
    static navigationOptions = {
        drawerLabel: <DrawerCell title='关于我们' icon='ios-arrow-forward'/>,
        drawerLockMode:'locked-closed'
    };
    render() {
        return (<View><Text>aboutUs</Text></View>)
    }
}