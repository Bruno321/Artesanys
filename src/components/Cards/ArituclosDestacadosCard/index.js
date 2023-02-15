import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native'

export const ArticulosDestacadosCard = ({data}) => {
    console.log(data)
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={{flex:1,resizeMode:"contain"}} source={require("../../../assets/llavero.jpg")}/>
            </View>
            <View style={styles.midContainer}>
                <Text>{data.item.title}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text>{data.item.price}</Text>
                {/* TODO render de imagenes */}
                <Text>{data.item.calification}</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"blue",
        padding:10,
        width:170,
    },
    topContainer:{
        height:100,
        width:150,
        backgroundColor:"red"
    },
    midContainer:{
        flex:1,
        backgroundColor:"white"
    },
    bottomContainer:{
        flex:1,
        backgroundColor:"yellow"
    }

})