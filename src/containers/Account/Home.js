import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
} from 'react-native';
import { connect } from "react-redux";
import Profile from "../../components/Home/Profile";
import Calender from "../../components/Home/Calender";
import PlanCard from "../../components/Home/PlanCard";
import MenuIcon from "../../components/Menu";
@connect(({ app }) => ({
    app
}))
export default class Home extends Component {
    static navigationOptions =({navigation})=> { 
        return{
            title: '我的',
            // headerLeft: <MenuIcon/>
            headerLeft:(<MenuIcon/>),
            headerRight:(<View></View>)
        }
    }
    
    componentDidMount(){

    }

    componentWillUnmount(){
        // console.warn('home unmount')
    }
    
    // jump=()=>{  
      
    //     this.props.navigation.navigate('Plan')
    // }
    
    render() {
        return (
            <View>
                <Profile/>
                <Calender/>
                <PlanCard/>
            </View>
        )
    }
}