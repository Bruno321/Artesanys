import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faXmark);

export const  Inicio  = ()=>{
    
    return (
        <View >
            <Text>Hola</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        flexDirection:"row"
    },
    text:{
        fontSize:60,
        borderBottomColor:"black",
        borderBottomWidth:1,
        borderStyle:"solid"
    },
    crossContainer:{
        flex:1,
        padding:5,
    },
    contentContainer:{
        flex:9,
        paddingRight:40,
    },
    textContainer:{
      marginTop:100 ,
    },
    iconsContainer:{
        marginTop:250,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:200
    }
})