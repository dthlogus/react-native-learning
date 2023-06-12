import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () =>{
    const name = 'Matheus Ribeiro';

    return (
        <View>
            <Text style={styles.headerTitle}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderTitle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 45
    },
    subHeaderTitle: {
        fontSize: 25
    }
});

export default ComponentsScreen;