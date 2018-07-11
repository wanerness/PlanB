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
    static navigationOptions = {
        title: 'Home',
    }
    
    componentDidMount(){
        // fetch('login/').then((res)=>{
        //    return res.json()
        // }).then(data=>{
        //     console.warn(data)
        // }).catch(e=>{
        //     console.warn(e)
        // })
    }

    componentWillUnmount(){
        console.warn('home unmount')
    }
    
    // jump=()=>{  
      
    //     this.props.navigation.navigate('Plan')
    // }
    
    render() {
        return (
            <View>
                <Text>{this.props.app.home}</Text>
                {/* <Button onPress={()=>{this.jump()}} title='go to plan'></Button> */}
            </View>
        )
    }
}