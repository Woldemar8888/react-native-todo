import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {THEME} from '../theme';

export const AddTodo = ({onSubmit}) =>{
    const [value, setValue] = useState('');
    const pressHandler =()=>{
        if(value.trim()){
            onSubmit(value);
            setValue('');
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
           <Button
               style={styles.button}
               title="Добавить"
               onPress={pressHandler}
           />
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
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 5
    },
    button:{

    }
})