import React from "react";
import {View,Text, ImageBackground,Image, StyleSheet,TouchableOpacity} from 'react-native'
import { faPen,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const Perfil = () => {
    return(
        <View style={styles.container}> 
            <View style={styles.userCard}>
                <View style={styles.userCardLeft}>
                    <ImageBackground 
                        source={require("../../assets/woman.jpg")} 
                        imageStyle={styles.imgStyle}
                        style={styles.imgContainer}
                    >
                        <TouchableOpacity style={styles.circle}>
                            <FontAwesomeIcon icon={faPen} size={20} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.userCardRight}>
                    <Text style={styles.userText}>Inicio / Perfil</Text>
                    <Text style={{...styles.userText,fontWeight:"bold",fontSize:20}}>Marta Patricia R.</Text>
                    <Text style={styles.userText}>Vendedor nivel 1</Text>
                </View>
            </View>

            <View style={{...styles.iconsContainer,marginTop:15}}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image style={styles.image} source={require("../../assets/fast-delivery.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image style={styles.image} source={require("../../assets/like.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image style={styles.image} source={require("../../assets/shop.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image style={styles.image} source={require("../../assets/support.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{...styles.iconsContainer,marginTop:5}}>
                <Text style={styles.iconsText}>Pedidos</Text>
                <Text style={styles.iconsText}>Favoritos</Text>
                <Text style={styles.iconsText}>Mi tienda</Text>
                <Text style={styles.iconsText}>Soporte</Text>
            </View>

            <TouchableOpacity style={styles.optionCard}>
                <View style={styles.optionCardTextContainer}>
                    <Text style={styles.title}>Información de la cuenta</Text>
                    <Text style={styles.subTitle}>Contraseña, nombre, correo</Text>
                </View>
                <FontAwesomeIcon icon={faAngleRight} size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
                <View style={styles.optionCardTextContainer}>
                    <Text style={styles.title}>Seguridad</Text>
                    <Text style={styles.subTitle}>Autenticación, dispositivos</Text>
                </View>
                <FontAwesomeIcon icon={faAngleRight} size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
                <View style={styles.optionCardTextContainer}>
                    <Text style={styles.title}>Configuración</Text>
                    <Text style={styles.subTitle}>Notificaciones, privacidad, idioma</Text>
                </View>
                <FontAwesomeIcon icon={faAngleRight} size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
                <View style={styles.optionCardTextContainer}>
                    <Text style={styles.title}>Dirección y pago</Text>
                    <Text style={styles.subTitle}>Cambia tu dirección o método de pago</Text>
                </View>
                <FontAwesomeIcon icon={faAngleRight} size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
                <View style={styles.optionCardTextContainer}>
                    <Text style={styles.title}>Accesibilidad</Text>
                    <Text style={styles.subTitle}>Modo oscuro, tamaño de fuente</Text>
                </View>
                <FontAwesomeIcon icon={faAngleRight} size={20} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    userCard:{
        backgroundColor:"#2D2D2D",
        borderRadius:20,
        display:"flex",
        flexDirection:"row",
        padding:20,

        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    userCardLeft:{
        flex:1
    },
    userCardRight:{
        flex:2,
        padding:10,
        paddingLeft:15
    },
    iconsContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    iconContainer:{
        justifyContent:"center",
        flex:1,
        alignItems:"center"
    },
    iconCircle:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#2D2D2D",
        borderRadius:15,
        width:50,
        height:50,

        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    optionCard:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"white",
        marginTop:15,
        shadowColor:"#000",
        padding:15,
        borderRadius:10,

        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    optionCardTextContainer:{
        flex:2
    },

    title:{
        color:"black",
        fontSize:18,
        fontWeight:"700"
    },
    subTitle:{
        color:"black",
        fontSize:15,
        fontWeight:"500"
    },
    iconsText:{
        color:"black",
        fontSize:14,
        textAlign:"center",
        flex:1,
        fontWeight:"500"
    },
    image:{
        width:25,
        height:25
    },
    userText:{
        color:"white",
        fontSize:16
    },
    imgContainer:{
        borderColor:"white",
        borderRadius:45,
        borderWidth:5,
        width:100,
        height:100,
        justifyContent:"flex-end",
        alignItems:"flex-end"
    },
    imgStyle:{
        borderRadius:40,
        width:90,
        height:90,
    },
    circle:{
        width:35,
        height:35,
        backgroundColor:"white",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
    }
})