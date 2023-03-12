import React , { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

import { CarritoSubHeader } from '../../components/CarritoSubHeader';
import { CarritoList } from '../../components/CarritoList';
import { CarritoDatosEnvio } from '../../components/CarritoDatosEnvio';
import { CarritoPago } from '../../components/CarritoPago';

export const Carrito = () => {

    
    
    const [screenToRender,setScreenToRender] = useState(0)
    
    const components = [
        <CarritoList setScreenToRender={setScreenToRender}/>,
        <CarritoDatosEnvio setScreenToRender={setScreenToRender} />,
        <CarritoPago setScreenToRender={setScreenToRender} />
    ]
    return(
        <View style={styles.container}>
            <CarritoSubHeader setScreenToRender={setScreenToRender} screenToRender={screenToRender}/>
            <View style={{width:"90%",backgroundColor:"#a1a1a1",height:1.5,marginTop:20}}></View>
            {components[screenToRender]}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        alignItems:"center"
    },
    
})