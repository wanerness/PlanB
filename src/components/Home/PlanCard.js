// #f2f2f2

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class PlanCard extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.cell}></View>
                        <View style={styles.cell}><Text>已完成</Text></View>
                        <View style={styles.cell}><Text>完成率</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.cell}><Text>今日计划</Text></View>
                        <View style={styles.cell}><Text>1</Text></View>
                        <View style={styles.cell}><Text>100%</Text></View></View>
                    <View style={styles.row}>
                        <View style={styles.cell}><Text>总计划</Text></View>
                        <View style={styles.cell}><Text>100</Text></View>
                        <View style={styles.cell}><Text>80%</Text></View></View>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf:"center",
        
    },
    container: {
        backgroundColor: '#f2f2f2',
        width: '80%',
        height: 200,
        borderRadius: 10,
    },
    row:{
        flexDirection:'row',
        flex:1,
    },
    cell:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})
PlanCard.propTypes = {
   
}


export default withNavigation(PlanCard)