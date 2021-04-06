import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {Addtodo} from "./src/components/Addtodo";


export default function App() {
  return (
    <View>
        <Navbar title="Todo App"/>
        <View style={styles.container}>
            <Addtodo/>
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
