import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    item: {
        fontSize: 18,
        height: 50,
        padding: 15
    }
})


export default ({ item }) =>

    <View style={styles.container}>
        <Text style={styles.item}>{item.title}</Text>
    </View>



// con las llaves cubriendo Text no renderiza 
// export default ({item}) => {<Text>{item.title}</Text>}