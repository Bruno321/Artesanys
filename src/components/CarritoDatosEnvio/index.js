import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


export const CarritoDatosEnvio = ({setScreenToRender} ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Datos de contacto</Text>
            <TextInput style={styles.textInput} placeholder='Nombre y apellidos *'/>
            <TextInput style={styles.textInput} placeholder='Número de telefono *'/>
            <TextInput style={styles.textInput} placeholder='Correo electrónico'/>
            <Text style={styles.title}>Dirección de envío</Text>
            <TextInput style={styles.textInput} placeholder='Calle y número *'/>
            <TextInput style={styles.textInput} placeholder='Colonia *'/>
            <View>
                <TextInput style={styles.textInput} placeholder='País *'/>
                <TextInput style={styles.textInput} placeholder='Colonia *'/>
                <TextInput style={styles.textInput} placeholder='Código postal *'/>
            </View>
            <Text style={{marginTop:15,textAlign:"left",width:350}}>*Estos campos son obligatorios</Text>
            <TouchableOpacity style={styles.button} onPress={()=>setScreenToRender(2)}>
                <Text style={{fontSize:20,color:"white"}}>Continuar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        alignItems:"center"
    },
    textInput:{
        padding:10,
        backgroundColor: '#D9D9D9',
        color: '#424242',
        borderRadius:15,
        marginTop:10,
        width:350
    },
    title:{
        fontSize:18,
        fontWeight:"700",
        color:"black",
        marginTop:10,
        textAlign:"left",
        width:350
    },
    button:{
        backgroundColor:"black",
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginTop:15
    },
    
})