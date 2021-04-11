import React from "react";
import {TouchableOpacity, View, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';
import {} from "react-native-web";
import {AppTextBold} from "./AppTextBold";
import {THEME} from "../theme";

export const AppButton = ({children, onPress, color = THEME.MAIN_COLOR }) => {

    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return <Wrapper onPress = {onPress} activeOpacity = {0.7}>
        <View style = {{ ...styles.button, backgroundColor: color }}>
            <AppTextBold style = {styles.text}>{children}</AppTextBold>
        </View>
    </Wrapper>
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})