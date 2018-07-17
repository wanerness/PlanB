import React, { Component } from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

// @withNavigation()
class MenuIcon extends Component {
   
    render() {
        return (
            <View style={{marginLeft:20}}>
                <TouchableOpacity onPress={() => { this.props.navigation.openDrawer()}} style={{
                    width: 100,
                    // height: 40,
            }}>
                    <Ionicons name='md-chatbubbles' size={30} color='#fff' />
                </TouchableOpacity>
                
            </View>
        )
    }
}


// const styles = StyleSheet.create({
//     wrap: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingBottom: 40,
//     },
//     font: {
//         fontSize: 18,
//         letterSpacing: 2
//     },
//     em: {
//         color: '#C20C0C'
//     }
// })
// Calender.propTypes = {
// }


export default withNavigation(MenuIcon)