import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput } from 'react-native';



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <EvilIcons style={styles.icon} name="search" size={35} />
            <TextInput
                value={term}
                style={styles.input}
                placeholder="Search"
                // when the text changes update the state variable
                onChangeText={newTerm => onTermChange(newTerm)}
                // when the input is submitted fire the api call
                onSubmitEditing={() => onTermSubmit()} />
        </View>
    );
}
const styles = StyleSheet.create({
    background: {
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;