import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
} from 'react-native';      
import { connect } from "react-redux";
import List from "../../components/List";

import { withNavigation } from 'react-navigation';
@connect(({ app }) => ({
    app
}))
class Setting extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: '设置',
            headerRight: (<View></View>) 
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        // console.warn('home unmount')
    }

    // jump=()=>{  

    //     this.props.navigation.navigate('Plan')
    // }

    render() {
        return (
            <View>
                <List
                    style={{ marginTop: 20 }}
                > 
                    {/* <List.Item 
                        title="昵称"
                        description='点击设置昵称'
                        onPress={() => { }}
                    /> */}
                    {/* <List.Item
                        title="昵称"
                        description='点击设置昵称'
                        onPress={() => { }}
                    /> */}   
                     <List.Item  
                        title="头像"
                        img='data:image/jpeg;base64,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'
                        onPress={() => { }}
                    />
                </List>
                 {/* <List.Item
                        title="昵称"
                        description='点击设置昵称'
                        onPress={() => { }}
                    /> */}
            </View> 
        )
    }
}

export default withNavigation(Setting) 