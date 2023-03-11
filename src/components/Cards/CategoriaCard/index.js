import React,{ useEffect, useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar as whiteStar,faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar as blackStar,faPlus } from "@fortawesome/free-solid-svg-icons";

export const CategoriaCard = ({data}) => {
    
    const [blackStars,setBlackStars] = useState(Array.apply(null, Array(0).map(function () {})) )
    const [whiteStars,setWhiteStars] = useState(Array.apply(null, Array(0).map(function () {})) )

    useEffect(()=> {
        setBlackStars(Array.apply(null, Array(data.stars)).map(function () {}))
        setWhiteStars(Array.apply(null, Array(5-data.stars)).map(function () {}))
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {/* PONER LOS ICONOS */}
                <ImageBackground 
                    style={styles.imageContainer}
                    imageStyle={styles.imgStyle}
                    source={data.image}
                >
                    <TouchableOpacity style={styles.circle}>
                        <FontAwesomeIcon icon={faHeart} size={15}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <FontAwesomeIcon icon={faPlus} size={15}/>
                    </TouchableOpacity>
                </ImageBackground>
                {/* <Image style={{width:160,resizeMode:"cover",height:160,borderRadius:10}} source={data.image}/> */}
            </View>
            <View style={styles.midContainer}>
                <Text style={{fontSize:15,color:"black"}} numberOfLines={2} >{data.title}</Text>
                <Text style={{fontSize:12,color:"gray"}}>{data.nombreVendedor}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={{fontSize:10,color:"black"}} >{data.price}</Text>
                {blackStars.map((e,i)=>{
                    return (
                        <FontAwesomeIcon icon={blackStar} key={i}  size={12}/>
                    )
                })}
                {whiteStars.map((e,i)=>{
                    return (
                        <FontAwesomeIcon icon={whiteStar} key={i}  size={12}/>
                    )
                })}
                <Text style={{fontSize:10,color:"black"}} >({data.calification})</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:170,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        margin:10
    },
    topContainer:{
        width:160,
        flex:3,
        borderRadius:10,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10,
    },
    midContainer:{
        height:40,
        width:160,
    },
    bottomContainer:{
        height:20,
        width:160,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    imageContainer:{
        width:160,
        height:200,
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
    },
    circle:{
        backgroundColor:"white",
        borderRadius:50,
        width:25,
        height:25,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        marginBottom:10
    },
    imgStyle:{
        borderRadius:10,
    },

})