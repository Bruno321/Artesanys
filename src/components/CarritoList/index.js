import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { CarritoCard } from '../Cards/CarritoCard'

export const CarritoList = ({setScreenToRender}) => {
    return(
        <View style={styles.container}>
            <CarritoCard />
            <View style={styles.separator}></View>
            <View style={{display:"flex",flexDirection:"row",padding:10,width:300,marginTop:10}}>
                <View style={{flex:1}}>
                    <Text>Subtotal:</Text>
                    <Text>Impuestos:</Text>
                    <Text>Costo de envío:</Text>
                </View>
                <View style={{flex:1,alignItems:"flex-end"}}>
                    <Text>$350</Text>
                    <Text>$56</Text>
                    <Text>$120</Text>
                </View>
            </View>
            <View style={styles.separator}></View>
            <View style={{display:"flex",flexDirection:"row",padding:10,width:300}}>
                <Text style={{fontSize:25,color:"black",fontWeight:"bold",flex:1}}>Total:</Text>
                <Text style={{fontSize:25,color:"black",fontWeight:"bold",flex:1,textAlign:"right"}}>$526</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>setScreenToRender(1)}>
                <Text style={{fontSize:20,color:"white"}}>Continuar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:380,
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
    separator:{
        width:"90%",
        backgroundColor:"#a1a1a1",
        height:1.5,
    },
    button:{
        backgroundColor:"black",
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginTop:10
    },
})