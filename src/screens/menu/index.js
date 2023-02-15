import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList,Image } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {Dimensions} from 'react-native';

import {
    DrawerItem,
  } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
const screenWidth = Dimensions.get("screen").width;
library.add(faXmark);
export const  Menu  = (props)=>{
    const titlesUTF8 = [
        'Inicio',
        'Categorías',
        'Perfil',
        'Carrito'
    ]

    return (
            <View style={styles.container}>
                <TouchableOpacity  onPress={()=>props.navigation.closeDrawer()} 
                    style={styles.crossContainer}>
                    <FontAwesomeIcon icon="xmark"  size={30} />
                </TouchableOpacity>
                <View style={styles.contentContainer}>
                    <SafeAreaView  >
                        <FlatList
                            data={props.state.routes}
                            keyExtractor={data => data.key.toString()}
                            renderItem={(data) => {
                                return (
                                    <>
                                    <DrawerItem
                                        style={styles.drawerContainer}
                                        label={()=><Text style={styles.titulo}>{titlesUTF8[data.index]}</Text>}
                                        onPress={()=> props.navigation.navigate(data.item.name)}
                                    />
                                    {data.index==props.state.index ? <View style={styles.separator}></View> : null}
                                    </>
                                )
                            }}
                        />
                    </SafeAreaView>
                        <View style={{ height:100,display:"flex",justifyContent:"space-around"}}>
                            <View style={styles.iconsContainer}>
                                <Image source={require('../../assets/instagram.png')} style={styles.tinyLogo}/>
                                <Image source={require('../../assets/twitter.png')} style={styles.tinyLogo}/>
                                <Image source={require('../../assets/facebook.png')} style={styles.tinyLogo}/>
                                <Image source={require('../../assets/whatsapp.png')} style={styles.tinyLogo}/>
                            </View>
                            <View>
                                <Text style={{marginLeft:10}}>Artesanys 2023 ©</Text>
                            </View>
                        </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#D3D3D3"
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
        marginTop:5,
        marginLeft:5
    },
    contentContainer:{
        flex:9,
        paddingRight:40,
        display:"flex",
        justifyContent:"space-evenly",
        // backgroundColor:"red"
    },
    
    iconsContainer:{
        // marginTop:250,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:200
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    separator:{
        width:300,
        marginLeft:10,
        height:3,
        backgroundColor:"black",
        marginTop:-10
    },
    titulo:{
        fontSize:50,
        color:"black",
        marginLeft:-10,
    },
    drawerContainer:{
        marginLeft:0,
    }
})