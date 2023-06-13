import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'João Nicholas', age: 20},
        {name: 'Luis', age: 45},
        {name: 'João Paulo', age: 35},
        {name: 'Yango', age: 18},
        {name: 'Xandão', age: 28},
        {name: 'Luquinhas', age: 60}
    ]

    return (
        <FlatList 
            keyExtractor={(friend) => {friend.age}}
            data={friends}        
            renderItem={({item}) => {
                return (
                <Text style={styles.textStyle}>
                    {item.name} - Age {item.age}
                </Text>
                );
            }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;