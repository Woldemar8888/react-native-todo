import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

export const Addtodo = (props) =>{
    return (
        <View style ={styles.form}>
           <TextInput style={styles.input}/>
           <Button title="Добавить" style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    input:{
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 5
    },
    button:{

    }
})