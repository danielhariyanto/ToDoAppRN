import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function About () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About: </Text>
            <Text style = {styles.text}> This is a to do app. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        paddingTop: 40,
        backgroundColor: '#89CFF0',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        padding: 16,
    },
});