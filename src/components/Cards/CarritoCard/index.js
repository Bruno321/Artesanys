import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export const CarritoCard = ({data}) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{width:100,height:100,borderRadius:10}} source={require('../../../assets/joya.jpg')} />
            </View>
            <View style={{flex:3}}>

                <View>
                    <Text style={styles.title}>Nombre del artículo</Text>
                    <Text style={styles.subTitle}>Descripción del artículo</Text>
                    <Text style={styles.description}>Tamaño y color</Text>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={{fontSize: 12,color:"black",fontWeight:"bold"}}>$350 MXN</Text>
                    <FontAwesomeIcon icon={faTrashCan} size={20} style={{marginLeft:30}}/>
                    <View style={styles.sumador}>

                        <TouchableOpacity style={{...styles.circle}}>
                            <FontAwesomeIcon icon={faMinus} size={12}/>
                        </TouchableOpacity>

                        <Text style={{color:"black",fontSize:16}}>1</Text>

                        <TouchableOpacity style={{...styles.circle,backgroundColor:"black"}}>
                            <Image style={{width:14,height:14}} source={require("../../../assets/whiteAdd.png")}/>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        padding:10
    },
    imageContainer:{
        flex:2,
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontSize: 20,
        color:"black",
        fontWeight:"700",
    },
    subTitle:{
        fontSize: 16,
        color:"#a1a1a1",
    },
    description:{
        fontSize: 12,
        color:"#a1a1a1",
    },
   sumador:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#D9D9D9",
        borderRadius:10,
        width:60,
        justifyContent:"space-around",
        alignItems:"center",
    },
    circle:{
        width:15,
        height:15,
        borderColor:"black",
        borderRadius:50,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    },
    bottomContainer:{
        display:"flex",
        flexDirection:"row",
        marginTop:14,
        alignItems:"center",
        justifyContent: "space-between",
        width:190
    },
})