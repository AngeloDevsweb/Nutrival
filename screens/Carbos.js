import React, { useState, useEffect } from 'react'
import {View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import firebase from '../database/firebase'

const Proteinas = () => {

    const [estado, setEstado] = useState([])

    useEffect(()=>{
      firebase.db.collection('carbo').onSnapshot((querySnapshot)=>{
        const items = []
        querySnapshot.docs.forEach((doc)=>{
          const { title , subtitle, avatar } = doc.data()
          items.push({
            id: doc.id,
            title,
            subtitle,
            avatar,
          })
        })
        setEstado(items)
      })
    },[])

    return (
      <ScrollView>
        <View style={styles.padre}>
          <ImageBackground
            style={styles.imagen}
            source={{
              uri: "https://estaticos.miarevista.es/media/cache/1000x590_thumb/uploads/images/gallery/59c8ea555bafe82418bbec7e/alimentosproteinas-int.jpg",
            }}
          >
            <Text style={styles.textoImagen}>CARBOHIDRATOS</Text>
          </ImageBackground>
        </View>
        {/* fin del encabezado */}
        <Text style={styles.title}>Por 100gr. de alimento se obtiene un (N°) de carbohidratos en gramos</Text>

        {/* aqui el contenido de la lista */}
        
        {estado.map((comida)=>(
          <ListItem bottomDivider key={comida.id}>
          <ListItem.Chevron />
          <Avatar style={styles.avatar} source={{ uri: comida.avatar }} />
          <ListItem.Content>
            <ListItem.Title style={styles.titulo}>
              {comida.title}
            </ListItem.Title>
            <ListItem.Subtitle>{comida.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        ))}

      </ScrollView>
    );
}
const styles = StyleSheet.create({
    padre:{
        height:100
    },
    contenedor:{
        flex:1,
        flexDirection:'column'
    },
    imagen:{
        flex:1,
        resizeMode:'cover'
    },
    textoImagen:{
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold',
        color:'white',
        marginTop:25
    },
    title:{
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        fontWeight:'bold'
    },
    avatar:{
      height:80,
      width:100
    },
    titulo:{
      fontWeight:'bold'
    }
})
export default Proteinas
