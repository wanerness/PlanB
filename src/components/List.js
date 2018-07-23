import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text,Image } from "react-native";
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

// @withNavigation()
class List extends Component {

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

List.Item = (props) => {
    // console.warn(props)
    renderRight = () => {
        if (props.description) {
            return (<Text style={styles.des}> {props.description} </Text>)
        }
        if(props.img){
            return (<Image
                source={{uri:props.img}}
                // source={require('../assets/images/test.jpg')}
                style={styles.img} 
            />)
        }
    }
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={props.onPress}
        >
            <View>
                <Text>{props.title}</Text>
            </View>


            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <View style={{ marginEnd: 20 }}>
                    {renderRight()}
                </View>
                <View>
                    <Text style={styles.des}>> </Text>
                </View>
            </View>



        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20
    },
    item: {
        flexDirection: 'row',
        height: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#666',
    },
    des: {
        color: '#666',
    },
    img:{
        width:40,
        height:40,
        borderRadius:20
    }
})

List.Item.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    onPress: PropTypes.func
}

List.propTypes = {
    style: PropTypes.object
}

export default withNavigation(List)