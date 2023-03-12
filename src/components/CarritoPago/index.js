import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export const CarritoPago = ( ) => {
    return(
        <View style={styles.container}>
            <Text style={{marginTop:15,textAlign:"left",width:280,color:"black",fontWeight:"500"}}>Elejir método de pago</Text>
            <TouchableOpacity style={styles.pagoButton}>
                <View style={{flex:1,alignItems:"flex-end"}}>
                    <FontAwesomeIcon icon={faCreditCard} size={20} style={{marginRight:10}}/>
                </View>
                <Text style={{flex:2}}>Tarjeta de crédito / Débito</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pagoButton}>
                <View style={{flex:1,alignItems:"flex-end"}}>
                    <Image source={require("../../assets/oxxo.png")}  style={{width:35,height:35,marginRight:10}}/>
                </View>
                <Text style={{flex:2}}>Déposito en Oxxo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pagoButton}>
                <View style={{flex:1,alignItems:"flex-end"}}>
                    <FontAwesomeIcon icon={faPaypal} size={20} style={{marginRight:10}}/>
                </View>
                <Text style={{flex:2}}>Pago  por PayPal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>setScreenToRender(1)}>
                <Text style={{fontSize:20,color:"white"}}>Pagar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:350,
        justifyContent:"center",
        alignItems:"center"
    },
    pagoButton:{
        borderRadius:20,
        borderColor:"black",
        borderWidth:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:42,
        width:300,
        marginTop:15
    },
    button:{
        backgroundColor:"black",
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginTop:20
    },
})