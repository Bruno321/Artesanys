import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ImageBackground,Dimensions } from 'react-native';
import { ListaHorizontal } from '../../components/ListaHorizontal';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export const  Inicio  = ()=>{
    
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                    <ImageBackground  
                        style={styles.imageCont}  
                        imageStyle={styles.imageBackgroundStyle} 
                        source={require('../../assets/ofertasBackground.jpg')}>
                            <LinearGradient
                                colors={['#00000000', '#000000']} 
                                style={styles.overlay}
                                start={{x: 1, y: 0}} end={{x: 0, y: 0}}
                                >
                                    <View style={{display:"flex",flexDirection:"row"}}>
                                        <View style={styles.titleCont}>
                                            <Text style={{fontSize:20,color:"white"}}>!Mira nuestra sección de ofertas!</Text>
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity style={styles.button}>
                                                <Text style={{fontSize:15,color:"black",textAlign:"center"}}>Ir ahora</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                        </LinearGradient>
                    </ImageBackground>
            </View>
            <View style={styles.bottomContainer}>
                {/* Cambiar lo de request y mandarle la data nosotros */}
                <ListaHorizontal title={"Atículos destacados"} request={0}/>
                <ListaHorizontal title={"Atículos recientes"} request={1}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingRight:20,
        paddingLeft:20,
        paddingEnd:20,
        paddingStart:20,
        paddingTop:15
    },
    topContainer:{
        flex:1,
    },
    bottomContainer:{
        flex:3,
    },
    imageCont:{
        display:"flex",
        flexDirection:"row",
        height:screenHeight/5
    },
    titleCont:{
        flex:1,
        height:screenHeight/5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
    },
    buttonContainer:{
        flex:1,
        height:screenHeight/5,
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"flex-end",

    },
    button:{
        backgroundColor:"white",
        borderRadius:10,
        width:screenWidth/5,
        height:screenHeight/30,
        marginBottom:20,
        marginRight:20,
        justifyContent:"center"
    },
    imageBackgroundStyle:{
        borderRadius:30,
    },
    overlay: {
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        width :351
      },
})