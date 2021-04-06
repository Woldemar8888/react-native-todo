import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {AddTodo} from "./src/components/AddTodo";
import {Todo} from "./src/components/Todo";



export default function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos( prev => [...prev, {
        id: Date.now().toString(),
        title
    }])
  }

  const removeTodo = id => {
      setTodos( prev => prev.filter( item  => item.id !== id ));
  }

  return (
    <View style={{paddingBottom: 50}}>
        <Navbar title="Todo App"/>
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                keyExtractor = { item => item.id }
                data = {todos}
                renderItem = { ({item}) =>  <Todo todo={item} onRemove = {removeTodo} />}
            />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 20,
      paddingVertical: 15
  }

});
