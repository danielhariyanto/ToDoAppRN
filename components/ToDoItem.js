import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }) {
    return (
        <View style={styles.item}>
            <Text>{item.text}</Text>
            <View style={styles.icon}>
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <MaterialIcons name="delete" size={18} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: "row"
    },
    icon: {
        justifyContent: "flex-end",
        marginLeft: "auto"
    }
})