import React, {useState} from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import {Navbar} from './src/components/Navbar'
import {MainScreen} from "./src/screens/MainScreen"
import {TodoScreen} from "./src/screens/TodoScreen"
import {THEME} from "./src/theme";

async function loadApplication(){
     await Font.loadAsync({
        'roboto-regular': require('./assets/font/roboto/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/font/roboto/Roboto-Bold.ttf'),
        'roboto-thin': require('./assets/font/roboto/Roboto-Thin.ttf')
    })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  if(!isReady){
      return  <AppLoading
            startAsync = {loadApplication}
            onFinish = { () => setIsReady(true) }
            onError = { (err) => conlog.log(err) }
        />

  }


  const addTodo = title => {
    setTodos( prev => [...prev, {
        id: Date.now().toString(),
        title
    }])
  }

  const updateTodos = (id, title) => {
      setTodos( prev => prev.map( todo => {
                if( todo.id === id ){
                    todo.title = title;
                }
                return todo;
            })
      )
  }

  const removeTodo = id => {
      const todo = todos.find(todo => todo.id === id);

      Alert.alert(
          `Удаление элемента ${todo.title}`,
          'Вы уверены?',
      [
          {
              text: 'Отмена',
              style: 'cancel'
          },
          {
              text: 'Удалить',
              style: 'destructive',
              onPress: ()=>{
                  setTodoId(null);
                  setTodos( prev => prev.filter( item  => item.id !== id ));

              }
          }
      ],
      {cancelAble: false}
      )
  }

  let content = (
      <MainScreen
          todos = {todos}
          addTodo = {addTodo}
          removeTodo = {removeTodo}
          openTodo={ setTodoId }
      />
)
  if(todoId){
      const selectedTodo = todos.find( todo => todo.id === todoId )
      content =  <TodoScreen
         goBack = { ()=> {setTodoId(null)} }
         todo = {selectedTodo}
         onRemove = {removeTodo}
         onSave={updateTodos}
     />
  }

  return (
    <View>
        <Navbar title="Todo App"/>
        <View style={styles.container}>
            {content}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 15
  }
});
