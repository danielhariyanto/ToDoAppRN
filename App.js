import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'COSI 131 Programming Assignment', key: '1' },
    { text: 'ECON 83 Homework', key: '2' },
    { text: 'COSI 101 Lisp HW', key: '3' }
  ]);


  const pressHandler = (key) => {
    Alert.alert("Delete", "Confirm delete? ", [
      {
        text: "Yes", onPress: () =>
          setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
          })
      },
      {
        text: "No", onPress: () =>
          console.log("message declined")
      }
    ])
  }



  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("dismissed keyboard");
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
