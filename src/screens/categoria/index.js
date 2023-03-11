import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,FlatList, ImageBackground} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Buscador} from '../../components/Buscador'
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export const Categoria = ({navigation}) => {

    const DUMMY_DATA = [
        {
            id:0,
            image:require("../../assets/abrigo.jpg"),
            title:"Ropa y Calzado"
        },
        {
            id:1,
            image:require("../../assets/joyas.jpg"),
            title:"Joyería y accesorios"
        },
        {
            id:2,
            image:require("../../assets/escritorio.jpg"),
            title:"Hogar"
        },
        {
            id:3,
            image:require("../../assets/arte.jpg"),
            title:"Arte"
        },
    ]

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Inicio/Categorías</Text>
            <Text style={{...styles.title,fontSize:25,fontWeight:"500"}}>Categorías</Text>
            <Buscador text={"Buscar una categoría..."} hasFilter={false}/>
            <FlatList
                data={DUMMY_DATA}
                keyExtractor={data=>data.id.toString()}
                renderItem={({item})=>{
                    return (
                        <ImageBackground 
                            style={styles.imageContainer}
                            imageStyle={styles.imageBackgroundStyle}
                            source={item.image}
                        >
                            <LinearGradient
                                colors={['#00000000', '#000000']} 
                                style={styles.overlay}
                                start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                            >
                                <View style={{display:"flex",flexDirection:"row",flex:1}}>
                                    <View style={styles.titleCont}>
                                        <Text style={{fontSize:25,color:"white",width:"100%"}}>{item.title}</Text>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.button}>
                                            <Text style={{fontSize:15,color:"black",textAlign:"center",fontWeight:"500"}}>Ir ahora</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
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
    imageContainer:{
        display:"flex",
        flexDirection:"row",
        height:screenHeight/5.5,
        marginTop:15
    },
    imageBackgroundStyle:{
        borderRadius:10,
    },
    overlay: {
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        width:"100%",
    },
    imageCont:{
        display:"flex",
        flexDirection:"row",
        height:screenHeight/5
    },
    title:{
        textAlign:"center",
        fontSize:16,
        color:"black"
    },
    titleCont:{
        flex:1,
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        paddingBottom:20,
        paddingLeft:20
    },
    buttonContainer:{
        flex:1,
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        paddingBottom:20,
        paddingRight:20
    },
    button:{
        backgroundColor:"white",
        borderRadius:10,
        width:screenWidth/5,
        height:screenHeight/30,
        justifyContent:"center",
    },
})