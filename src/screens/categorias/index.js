import React from 'react'
import {View,Text,StyleSheet,FlatList } from 'react-native'
import {Buscador} from '../../components/Buscador'
import {Dimensions} from 'react-native';
import { CategoriasCard } from '../../components/Cards/CategoriasCard';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export const Categorias = ({navigation}) => {

    const DUMMY_DATA = [
        {
            id:0,
            image:require("../../assets/abrigo.jpg"),
            title:"Ropa y Calzado",
            screen:"ropaCalzado"
        },
        {
            id:1,
            image:require("../../assets/joyas.jpg"),
            title:"Joyería y accesorios",
            screen:"joyeriaAccesorios"
        },
        {
            id:2,
            image:require("../../assets/escritorio.jpg"),
            title:"Hogar",
            screen:"hogar"
        },
        {
            id:3,
            image:require("../../assets/arte.jpg"),
            title:"Arte",
            screen:"arte"
        },
    ]
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Inicio / Categorías</Text>
            <Text style={{...styles.title,fontSize:25,fontWeight:"500"}}>Categorías</Text>
            <Buscador text={"Buscar una categoría..."} hasFilter={false}/>
            <FlatList
                data={DUMMY_DATA}
                keyExtractor={data=>data.id.toString()}
                renderItem={({item})=>{
                    return (
                        <CategoriasCard item={item}/>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingBottom:10,
        paddingTop:0,
    },
    title:{
        textAlign:"center",
        fontSize:16,
        color:"black"
    },
})