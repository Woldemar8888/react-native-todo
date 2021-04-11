import React from 'react';
import {View, StyleSheet} from 'react-native';
import {THEME} from '../theme';
import {AppTextBold} from "../view/AppTextBold";
import {Platform} from "react-native-web";


export const Navbar = ({title}) => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid

            })}}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarIos : {
        borderBottomWidth: 1,
        borderBottomColor: THEME.MAIN_COLOR
    },
    text:{
        fontSize: 26,
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
    }
})