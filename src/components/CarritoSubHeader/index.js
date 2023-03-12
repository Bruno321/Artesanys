import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons';


export const CarritoSubHeader = ({setScreenToRender,screenToRender}) => {

    const handlePress = () => {
        if(screenToRender!=0){
            setScreenToRender(screenToRender - 1)
        }
    }

    return(
        <View style={styles.container}>
            <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity style={styles.circle} onPress={handlePress}>
                    <FontAwesomeIcon icon={faAngleLeft} size={30} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flex:1}} onPress={()=>setScreenToRender(0)}>
                <Text style={[screenToRender==0 ?styles.selectedTitle :styles.title]}>Carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:2}} onPress={()=>setScreenToRender(1)}>
                <Text style={[screenToRender==1 ?styles.selectedTitle :styles.title]}>Datos de envío</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}} onPress={()=>setScreenToRender(2)}>
                <Text style={[screenToRender==2 ?styles.selectedTitle :styles.title]}>Pago</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize: 15,
        color:"#a1a1a1",
        textAlign:"center",
    },
    selectedTitle:{
        fontSize: 22,
        color:"black",
        fontWeight:"700",
        textAlign:"center"
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