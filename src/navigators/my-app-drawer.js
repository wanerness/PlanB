import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import AppTab from "./app-tab";
import { Image, ScrollView, View, StyleSheet, TouchableHighlight, SafeAreaView, Button } from "react-native";
import CustomButton from "../components/CustomButton";

const MyApp = createDrawerNavigator({
    Home: {
        screen: AppTab,
    },
    Test: {
        screen: AppTab
    }
}, {
        // drawerWidth:200
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#C20C0C'
        },
        contentComponent: props => {
            console.log('contentComponent');
            console.log(props);
            return (
                <ScrollView>
                    <SafeAreaView>
                        <View style={styles.wrap}>
                            <TouchableHighlight onPress={() => { props.navigation.navigate('Folk') }}>
                                <Image
                                    source={require('../assets/images/test.jpg')}
                                    style={styles.container} />
                            </TouchableHighlight>
                        </View>
                        <DrawerItems {...props} />

                        <View style={styles.exit}>
                            <CustomButton
                                text="退出登录"
                                buttonColor="#C20C0C"
                                borderWidth={1}
                                buttonRadius={10}
                                buttonType="stroke"
                                textStyle={{ fontSize: 16, color:'#C20C0C'}}
                                // selectedColor="#C20C0C"
                                // disableColor="#666"
                                style={{ marginTop: 20, width: 200, height: 50 }}
                                onPress={(callback) => {
                                    alert('退出')
                                    setTimeout(() => {

                                        callback();

                                    }, 3000);
                                }}
                            />
                        </View>

                    </SafeAreaView>
                </ScrollView>
            )
        },
    });

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

    },
    exit: {
        paddingTop: 80,
        alignItems: 'center',
       
    },
    btn: {
        width: 50,
        height: 20
    }
})

export default MyApp