import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

// @withNavigation()
class Profile extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate('Plan')}}>
                    <Image
                        source={require('../../assets/images/test.jpg')}
                        style={styles.container} />
                </TouchableHighlight>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
    },
    container: {
        width: 100,
        height: 100,
        borderRadius: 50,

    }
})
Profile.propTypes = {
    imgUrl: PropTypes.string
}


export default withNavigation(Profile)