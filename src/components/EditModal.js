import React, {useState} from 'react'
import {Modal, View, StyleSheet, TextInput, Alert } from "react-native";
import {THEME} from "../theme";
import {AppButton} from "../view/AppButton";

export const EditModal = ({visible, onCancel,  value, onSave}) => {
    const startValue = value;
    const [title, setTitle] = useState(value);
    const saveHandler = () =>{
        if(title.trim().length  < 3 ){
            Alert.alert('Минимальная длина заголовка должна быть не менее 3 символов')
        }else{
            onSave(title)
        }
    }
    return (
        <Modal
            visible={visible}
            animationType ='slide'
            transparent = {false}
        >
            <View style ={styles.wrapper}>
                <TextInput
                    value = {title}
                    onChangeText = {setTitle}
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    maxLength = {64}

                />
                <View style={styles.buttons}>
                    <AppButton  onPress={()=>{
                        setTitle(startValue)
                       return  onCancel()
                    }} color={THEME.DANGER_COLOR}>Отмена</AppButton>
                    <AppButton  onPress={  saveHandler }>Сохранить</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
       justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
        marginBottom: 10
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
