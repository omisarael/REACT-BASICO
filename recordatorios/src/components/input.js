import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        padding: 15

    },
    view: {
        height: 50,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ({ placeholder, onChangeText, value }) =>
    <View style={styles.view}>
        <TextInput
            onChangeText={onChangeText}
            style={styles.input}
            placeholder={placeholder}
            value={value} />
    </View>