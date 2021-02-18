import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'COSI 131 Programming Assignment', key: '1' },
    { text: 'ECON 83 Homework', key: '2'},
    { text: 'COSI 101 Lisp HW', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
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
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={( {item} ) => (
              <ToDoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
