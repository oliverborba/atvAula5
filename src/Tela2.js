import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Tela2() {

  const route = useRoute();
  const data = route.params.data;

  return (

    <View style={styles.container}>
      <Animatable.Image
        animation="pulse"
        useNativeDriver
        iterationCount={Infinity}
        rubberBand resizeMode='contain' source={{ uri: data.image }} style={styles.imagens} />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>FILME: {data.filme}</Text>
        <View style={styles.conteudo}>
          <Text>ANO: {data.ano}</Text>
          <Text>ESTILO: {data.estilo}</Text>
          <Text>DIREÇÃO: {data.direcao}</Text>
          <Text>DESCRIÇÃO: {data.descricao}</Text>
        </View>
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: "5%",
    padding: 20
  },
  imagens: {
    width: 170,
    height: 330,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  conteudo: {
    marginTop: 5,
    flex: 1,
    fontSize: 16
  }
})
