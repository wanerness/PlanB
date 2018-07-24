import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
export default class DrawerCell extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.icon}>
                    <Ionicons name={this.props.icon} size={20} color='#C20C0C'>
                    </Ionicons>
                </View>
                <Text style={styles.font}>{this.props.title}</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        height: 45,
        width:'100%',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    icon: {
        marginLeft: 20,
        marginRight: 15
    },
    font: { 
        fontWeight: 'bold', 
        fontSize: 14 }
})

DrawerCell.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
}