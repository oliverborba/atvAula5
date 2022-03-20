import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function FlatComponent({ data }) {

  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Tela2', { data: data })
  }

  return (

    <TouchableOpacity style={styles.container} onPress={navegar}  >
      <Image resizeMode='contain' source={{ uri: data.image }} style={{ width: 100, height: 100 }} />
      <Animatable.View
        animation="zoomIn"
        useNativeDriver
        style={styles.subcontainer}>
        <Text >{data.filme}</Text>
        <Text>{data.ano}</Text>
        <Text>{data.estilo}</Text>
        <Text>{data.direcao}</Text>
      </Animatable.View >
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    marginBottom: 5,
    flexDirection: 'row',
    padding: 5,
  },
  subcontainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})


