import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faWhatsapp, faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faXmark);

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

export const  Menu  = (props)=>{
    

        // <View style={styles.container}>
        //     <View style={styles.crossContainer}>
        //         <FontAwesomeIcon icon="xmark" style={{width:50,height:50}} size={30}/>
        //     </View>
        //     <View style={styles.contentContainer}>
        //         <View style={styles.textContainer}>
        //             <Text style={styles.text}>Inicio</Text>
        //             <Text style={styles.text}>Categorías</Text>
        //             <Text style={styles.text}>Perfil</Text>
        //             <Text style={styles.text}>Carrito</Text>
        //         </View>
        //         <View style={styles.iconsContainer}>
        //             <FontAwesomeIcon icon={faInstagram} size={30}/>
        //             <FontAwesomeIcon icon={faTwitter} size={30}/>
        //             <FontAwesomeIcon icon={faFacebookF} size={30}/>
        //             <FontAwesomeIcon icon={faWhatsapp} size={30}/>
        //         </View>
        //         <Text style={{marginTop:20}}>Artesanys 2023 ©</Text>
        //     </View>
        // </View>
    return (
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label=""
                    onPress={() => props.navigation.closeDrawer()}
                    icon={()=> <FontAwesomeIcon icon="xmark" style={{width:50,height:50}} size={30}/>}
                    />
                <View style={{marginTop:80}}>
                    <DrawerItemList {...props}  />
                </View>
                <DrawerItem
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
            </DrawerContentScrollView>
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