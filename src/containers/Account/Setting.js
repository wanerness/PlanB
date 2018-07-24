import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
} from 'react-native';
import { connect } from "react-redux";
import List from "../../components/List";

import { withNavigation } from 'react-navigation';
@connect(({ app, settings }) => ({
    app,
    menu: settings.menu
}))
class Setting extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: '设置',
            headerRight: (<View></View>),
        }
    }

    componentDidMount() {
        // console.warn(this.props.menu)
    }

    componentWillUnmount() {
        // console.warn('home unmount')
    }

    // jump=()=>{  

    //     this.props.navigation.navigate('Plan')
    // }

    renderList = () => {
        const { menu } = this.props
        return menu.map((item,i) => (
            <List key={i}>
                {item.map((cell,j) => (
                    <List.Item 
                        key={j}
                        icon={cell.icon}
                        title={cell.title}
                        description={cell.subtitle}
                        img={cell.img}
                        />
                )
                )}
            </List>
        ))
    }

    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        )
    }
}

export default withNavigation(Setting) 