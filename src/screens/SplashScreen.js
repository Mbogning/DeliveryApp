import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import {Colors, Images, Fonts} from '../constants';
import { Display } from '../utils';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle = "light-content"
                backgroundColor = {Colors.DEFAULT_GREEN}
                translucent
            />
            <Image
                source = {Images.PLATE}
                resizeMode = "contain"
                style = {styles.image}
            />
            <Text style={styles.titleText}>Food Delivery</Text>
            <Text style={styles.authorText} >by Mbogning</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_GREEN,
    },

    image : {
        height: Display.setHeight(30), 
        width: Display.setWidth(60), 

    },

    titleText : {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        fontFamily: Fonts.POPPINS_LIGHT,
    },

    authorText : {
        color: Colors.DEFAULT_WHITE,
        fontSize: 14,
        fontFamily: Fonts.POPPINS_THIN,
    }
});


export default SplashScreen;

