import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions } from "react-native";
import {THEME} from '../theme';
import {AppCard} from "../view/AppCard";
import {AppButton} from "../view/AppButton";
import {EditModal} from "../components/EditModal";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false)

    const saveHandler = title =>{
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={()=> {setModal(false)}}
                onSave={saveHandler}

            />
            <AppCard style={styles.card}>
                <Text>{todo.title}</Text>
                <AppButton  onPress ={()=>{setModal(true)}}>
                    <FontAwesome name = "edit" size = {20}/>
                </AppButton>
            </AppCard>
            <View style = {styles.buttons}>
                <View style={styles.button}>

                    <AppButton  color= {THEME.GREY_COLOR} onPress ={goBack}>
                        <AntDesign name = "back" size = {20}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton  color={THEME.DANGER_COLOR}  onPress ={()=>{onRemove(todo.id)}}>
                        <FontAwesome name = "remove" size = {20}/>
                    </AppButton>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: Dimensions.get('window').width / 3
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})