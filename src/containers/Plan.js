import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native';
export default class Plan extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'plan',
        }
    }
    render() {
        return (
        <View>
            <Text>Plan</Text>
            
        </View>)
    }
}