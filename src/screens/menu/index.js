import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faWhatsapp, faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
import {Dimensions} from 'react-native';


import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
const screenWidth = Dimensions.get("screen").width;
library.add(faXmark);
export const  Menu  = (props)=>{
    
    return (
            <DrawerContentScrollView {...props}>
                <TouchableOpacity onPress={()=>props.navigation.closeDrawer()} 
                    style={{ width:40,marginTop:5,marginLeft:10}}>
                    <FontAwesomeIcon icon="xmark"  size={30} />
                </TouchableOpacity>
                <View style={{marginTop:80}}>
                    <DrawerItemList {...props}  />
                </View>
                <View style={styles.iconsContainer}>
                    <FontAwesomeIcon icon={faInstagram} size={30}/>
                    <FontAwesomeIcon icon={faTwitter} size={30}/>
                    <FontAwesomeIcon icon={faFacebookF} size={30}/>
                    <FontAwesomeIcon icon={faWhatsapp} size={30}/>
                </View>
                <Text style={{marginTop:20,marginLeft:screenWidth/6}}>Artesanys 2023 ©</Text>
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
        marginLeft:screenWidth/6,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:200
    }
})