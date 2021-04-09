import React from 'react'
import {View, StyleSheet} from "react-native";

export const AppCard = props => (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )


const styles = StyleSheet.create({
    card: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset : {width: 2, height : 2},
        backgroundColor: '#fff',
        borderRadius:  10,
        elevation : 8
    }
})