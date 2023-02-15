import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const Header = ({navigation}) => {
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <FontAwesomeIcon icon={faBars} size={31} />
            </TouchableOpacity>
            <Text style={styles.title}>Artesanys</Text>
            <Image style={{width:35,height:35}} source={require('../../assets/shoppingCart.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
    },
    title:{
        fontSize:25,
        color:"black"
    }
})