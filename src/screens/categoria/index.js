import React from "react";
import {View,StyleSheet,FlatList,Text,TouchableOpacity} from 'react-native'
import { Buscador } from "../../components/Buscador";
import { CategoriaCard } from "../../components/Cards/CategoriaCard";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from '@react-navigation/native';

export const Categoria = () => {
    const navigation = useNavigation();

    const DUMMY_DATA = {
        title:"Ropa y Calzado",
        data:[
            {
                title:"Nombre del artículo",
                price:"$134.00 MXN",//TODO preguntar sobre el precio
                stars: 5, 
                calification: 33,
                id:0,
                image:require("../../assets/abrigo1.jpg"),
                nombreVendedor:"Nombre del vendedor"
            },
            {
                title:"Nombre del artículo",
                price:"$134.00 MXN",//TODO preguntar sobre el precio
                stars: 2, 
                calification: 10,
                id:1,
                image:require("../../assets/abrigo2.jpg"),
                nombreVendedor:"Nombre del vendedor"
            },
            {
                title:"Nombre del artículo",
                price:"$134.00 MXN",//TODO preguntar sobre el precio
                stars: 5, 
                calification: 33,
                id:2,
                image:require("../../assets/abrigo3.jpg"),
                nombreVendedor:"Nombre del vendedor"
            },
            {
                title:"Nombre del artículo",
                price:"$134.00 MXN",//TODO preguntar sobre el precio
                stars: 5, 
                calification: 33,
                id:3,
                image:require("../../assets/abrigo4.jpg"),
                nombreVendedor:"Nombre del vendedor"
            },
            {
                title:"Nombre del artículo",
                price:"$134.00 MXN",//TODO preguntar sobre el precio
                stars: 2, 
                calification: 10,
                id:4,
                image:require("../../assets/abrigo1.jpg"),
                nombreVendedor:"Nombre del vendedor"
            },
            {
                title:"Nombre del artículo",
                price:"$134.00 MXN",//TODO preguntar sobre el precio
                stars: 5, 
                calification: 33,
                id:5,
                image:require("../../assets/abrigo2.jpg"),
                nombreVendedor:"Nombre del vendedor"
            },
        ]
    }

    return (
        <View style={styles.container}>
            <View style={{display:"flex",flexDirection:"row"}}>
                <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.circle} onPress={()=>navigation.navigate("Categorias")}>
                        <FontAwesomeIcon icon={faAngleLeft} size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:5}}>
                    <Text style={{...styles.title,fontSize:25,fontWeight:"500"}}>{DUMMY_DATA.title}</Text>
                    <Text style={styles.title}>Inicio / Categorías/ {DUMMY_DATA.title}</Text>
                </View>
            </View>
            <Buscador text={"Buscar un artículo"} hasFilter={true} />
            <FlatList
                data={DUMMY_DATA.data}
                numColumns={2}
                keyExtractor={data=>data.id.toString()}
                contentContainerStyle={styles.categoriaContainer}
                renderItem={({item})=>{
                    return (
                        <CategoriaCard data={item}/>
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
        fontSize:16,
        color:"black"
    },
    categoriaContainer:{
        alignItems:"center"
    },
    circle:{
        backgroundColor:"white",
        borderRadius:50,
        width:45,
        height:45,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
})