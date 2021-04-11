import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard} from 'react-native';
import {THEME} from '../theme';
import { MaterialIcons } from '@expo/vector-icons';

export const AddTodo = ({onSubmit}) =>{
    const [value, setValue] = useState('');
    const pressHandler =()=>{
        if(value.trim()){
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        }else{
            Alert.alert('Дело не может быть пустым');
        }
    }

    return (
        <View style ={styles.form}>
           <TextInput
               style={styles.input}
               onChangeText={setValue}
               value={value}
               placeholder = 'Название дела...'
           />
           <MaterialIcons.Button
               onPress={pressHandler}
               name = "add"
           >Добавить</MaterialIcons.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10

    },
    input:{
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 5
    }
})