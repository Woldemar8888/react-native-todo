import React from "react";
import {StyleSheet, Text} from "react-native";

export const AppTextBold = props => {
    return <Text style = {{...props.style, ...styles.default}}>{props.children}</Text>
}

const  styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
})