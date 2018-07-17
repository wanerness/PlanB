import React, { Component } from "react";
import { View,StyleSheet,Text } from "react-native";
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';


// @withNavigation()
class Calender extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View>
                    <Text style={[styles.font, styles.normal]}>今天是<Text style={[styles.font, styles.em]}>5月8日</Text></Text> 
                </View>
                <View style={{paddingBottom:20,paddingTop:10}}>
                    <Text style={[styles.font, styles.normal]}>今天计划<Text style={[styles.font, styles.em]}>2</Text>个</Text> 
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    font:{
        fontSize:18,
        letterSpacing:2
    },
    em:{
        color:'#C20C0C'
    }
})
Calender.propTypes = {
}


export default withNavigation(Calender)