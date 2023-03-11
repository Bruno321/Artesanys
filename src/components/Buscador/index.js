import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-gesture-handler';


export const Buscador = ({text,hasFilter}) => {
    return(
        <View style={styles.container}>
            {hasFilter ? <Image  style={{width:35,height:35}} source={require("../../assets/filter.png")}/>:null}
            <View style={styles.filterContainer}>
                <TextInput style={styles.filter} placeholder={text}/>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={22} style={{marginLeft:-30}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        padding:10,
        marginTop:5
    },
    filterContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:40,
    },  
    filter:{
        flex: 1,
        padding:10,
        backgroundColor: '#D9D9D9',
        color: '#424242',
        borderRadius:15
    }
})