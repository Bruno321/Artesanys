import React from "react";
import {View,Text,StyleSheet,TouchableOpacity, ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export const CategoriasCard = ({item}) => {
    const navigation = useNavigation();
    return (
        <ImageBackground 
            style={styles.imageContainer}
            imageStyle={styles.imageBackgroundStyle}
            source={item.image}
        >
            <LinearGradient
                colors={['#00000000', '#000000']} 
                style={styles.overlay}
                start={{x: 1, y: 0}} end={{x: 0, y: 0}}
            >
                <View style={{display:"flex",flexDirection:"row",flex:1}}>
                    <View style={styles.titleCont}>
                        <Text style={{fontSize:25,color:"white",width:"100%"}}>{item.title}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Categoria",{screen:item.screen})}>
                            <Text style={{fontSize:15,color:"black",textAlign:"center",fontWeight:"500"}}>Ir ahora</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        display:"flex",
        flexDirection:"row",
        height:screenHeight/5.5,
        marginTop:15
    },
    imageBackgroundStyle:{
        borderRadius:10,
    },
    overlay: {
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        width:"100%",
    },
    imageCont:{
        display:"flex",
        flexDirection:"row",
        height:screenHeight/5
    },
    titleCont:{
        flex:1,
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        paddingBottom:20,
        paddingLeft:20
    },
    buttonContainer:{
        flex:1,
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        paddingBottom:20,
        paddingRight:20
    },
    button:{
        backgroundColor:"white",
        borderRadius:10,
        width:screenWidth/5,
        height:screenHeight/30,
        justifyContent:"center",
    },
})