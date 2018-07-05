import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
} from 'react-native';
import { connect } from "react-redux";
@connect(({ app }) => ({
    app
}))
export default class Home extends Component {
    jump=()=>{
        console.log(1111)
        this.props.navigation.navigate('Plan')
    }
    render() {
        return (
            <View>
                <Text>{this.props.app.home}</Text>
                <Button onPress={()=>{this.jump()}} title='go to plan'></Button>
            </View>
        )
    }
}