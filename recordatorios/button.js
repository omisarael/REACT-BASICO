import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';

// el componente recibira dos proiedades
// cuando se declara un componente como funcion todas las props que se le pasen 
// quedaran disponibles aqui para usarlas en este caso text y onPress
const styles = StyleSheet.create({
    
    button: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 4
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
})

export default ({ title, onPress }) =>
    
        <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    