import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {

    let content = (<FlatList
        keyExtractor = { item => item.id }
        data = {todos}
        renderItem = { ({item}) =>  <Todo
            todo={item}
            onRemove = {removeTodo}
            onOpen = {openTodo}
        />}
    />)

    if(todos.length === 0){
        content = (
            <View
                style={styles.imgWrapper}

            >
                <Image
                    style = {styles.img}
                    source = {require('../../assets/no-items.png')}

                />

            </View>
        )
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrapper :{
        padding: 10
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    }
})