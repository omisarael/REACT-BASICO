import React from 'react';
import { StyleSheet, Text, View, FlatList, Modal, TextInput } from 'react-native';
import Xnamedatos from './datos';
import {Input, Item, Button} from './components';

export default class App extends React.Component {

  state = { 
    data: [],
    //data: Xnamedatos,
    isVisible: false,
    text: ""
  }
  handlePress = () => {
    this.setState({isVisible: true})
  }

  handleChange = (text) => {
    this.setState({text})
  }

  handleSave = () => {
    const {text, data} = this.state;

    // a los datos (data) se le concatena el nuevo dato t por lo tanto 
    // queda al final  -->
    // const datos = data.concat(
    //   {key: Math.random().toString(),
    //   title: text});
    
    // Al dato ingresado se le concatenan los datos existentes por lo tanto 
    // este nuevo dato queda al principio -->
    const datos = [{key: Math.random().toString(),
    title: text}].concat(data)



      this.setState({
        data: datos,
        isVisible: false,
        text: ""
      })
  }

  render() { 
    const {data} = this.state;
    
    return (
      <View style={[styles.container, styles.gray]}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Recordatorios</Text>
        </View>
        <View style={styles.view}>
          <Button title="Agregar" onPress={this.handlePress} />
        </View>
        <FlatList data={data} renderItem={Item} />
        <Modal visible={this.state.isVisible} animationType="slide">
          <View style={[styles.modalView, styles.container]}><Text>Ingresa recordatorio</Text></View>
          <Input 
          onChangeText={this.handleChange} 
          placeholder="Recordatorio"
          value= {this.state.text} />
          <Button title="Guardar" onPress={this.handleSave} />
        </Modal>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    height: 100,                                                                
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  titulo: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 28,
    fontFamily: 'open-sans-bold'
  },
  view: {
    height: 50,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1
  },
  gray: {
    backgroundColor: '#eee'
  },
  
});
