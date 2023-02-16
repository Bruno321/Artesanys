import React,{ useEffect, useState} from "react";
import {View,Text,Image,StyleSheet} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar as whiteStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as blackStar } from "@fortawesome/free-solid-svg-icons";

export const ArticulosDestacadosCard = ({data}) => {
    
    const [blackStars,setBlackStars] = useState(Array.apply(null, Array(0).map(function () {})) )
    const [whiteStars,setWhiteStars] = useState(Array.apply(null, Array(0).map(function () {})) )

    useEffect(()=> {
        setBlackStars(Array.apply(null, Array(data.item.stars)).map(function () {}))
        setWhiteStars(Array.apply(null, Array(5-data.item.stars)).map(function () {}))
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={{width:160,resizeMode:"cover",height:160}} source={require("../../../assets/llavero.jpg")}/>
            </View>
            <View style={styles.midContainer}>
                <Text style={{fontSize:15,color:"black"}} numberOfLines={2} >{data.item.title}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={{fontSize:10,color:"black"}} >{data.item.price}</Text>
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
                <Text style={{fontSize:10,color:"black"}} >({data.item.calification})</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:170,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    },
    topContainer:{
        width:160,
        flex:3,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
    },
    midContainer:{
        height:45,
        width:160,
    },
    bottomContainer:{
        height:20,
        width:160,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
    }

})