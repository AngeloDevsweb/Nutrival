import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'

const Home = (props) => {
    return (
      <ScrollView>
        <View>
          <Text style={styles.titulo} >Valores Nutricionales</Text>
        </View>
        {/* primer contenedor */}
        <View style={styles.padre}>
            <View>
                <Image style={styles.imagen} source={{uri: 'https://www.prensalibre.com/wp-content/uploads/2019/08/Prote%C3%ADnas-2.jpg?quality=82'}} />
                <Text style={styles.subtitulo}>Proteinas</Text>
                <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('proteina')} >
                    <Text style={styles.textoBoton}>Ver</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Image style={styles.imagen} source={{uri: 'https://www.hola.com/imagenes/estar-bien/20191119154320/dieta-saber-detectar-carbohidratos-lb/0-747-620/otros-tipos-carbohidratos-pan-pasta-t.jpg'}} />
                <Text style={styles.subtitulo}>Carbohidratos</Text>
                <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('carbohidratos')} >
                    <Text style={styles.textoBoton}>Ver</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* segundo contenedor */}
        <View style={styles.padre2}>
            <View>
                <Image style={styles.imagen} source={{uri: 'https://libbys.es/wordpress/wp-content/uploads/2020/05/grasas-saludables.jpg'}} />
                <Text style={styles.subtitulo}>Grasas</Text>
                <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('grasas')} >
                    <Text style={styles.textoBoton}>Ver</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Image style={styles.imagen} source={{uri: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/fibra_2.jpg?itok=ah-lhb1o'}} />
                <Text style={styles.subtitulo}>Fibras</Text>
                <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('fibras')}>
                    <Text style={styles.textoBoton}>Ver</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    titulo:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'400',
        marginTop:20,
        marginBottom:20
    },
    padre:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    subtitulo:{
        textAlign:'center',
        fontSize:16,
        marginBottom:5,
        marginTop:5
    },
    imagen:{
        height:150,
        width:150
    },
    boton:{
        backgroundColor:'tomato',
        borderRadius:10
    },
    textoBoton:{
        textAlign:'center',
        color:'white',
        padding:5,
    },
    padre2:{
        flex:1,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around'
    }

})
export default Home
