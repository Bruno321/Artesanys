import React, {useEffect, useState} from "react";
import {View,Text,Image,StyleSheet,FlatList} from 'react-native'
import { ArticulosDestacadosCard } from "../Cards/ArituclosDestacadosCard";




export const ListaHorizontal = ({title,request}) => {
    const [data,setData] = useState()


    useEffect(()=>{
        if(request===0){
            setData([
                {
                    title:"Llavero floral grabado personalizado junto a un titulo donde el cabron se paso de verga escribiendo",
                    price:"$134.00 MXN",//TODO preguntar sobre el precio
                    stars: 5, 
                    calification: 33,
                    id:0,
                },
                {
                    title:"Llavero floral grabado personalizado",
                    price:"$134.00 MXN",//TODO preguntar sobre el precio
                    stars: 2, 
                    calification: 10,
                    id:1,
                },
                {
                    title:"Pendientes chapados en oro con flores",
                    price:"$134.00 MXN",//TODO preguntar sobre el precio
                    stars: 5, 
                    calification: 33,
                    id:2,
                },
                
            ])
        } else if(request===1){
            setData([
                {
                    title:"Llavero floral grabado personalizado",
                    price:"$134.00 MXN",//TODO preguntar sobre el precio
                    stars: 5, 
                    calification: 33,
                    id:0,
                },
                {
                    title:"Llavero floral grabado personalizado",
                    price:"$134.00 MXN",//TODO preguntar sobre el precio
                    stars: 2, 
                    calification: 10,
                    id:1,
                },
                {
                    title:"Pendientes chapados en oro con flores",
                    price:"$134.00 MXN",//TODO preguntar sobre el precio
                    stars: 5, 
                    calification: 33,
                    id:2,
                },
                
            ])
        }
    },[])
    return (
        <View style={styles.container}>
            <View style={{display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
                <Text style={{fontSize:22,color:"black"}}>{title}</Text>
                <Text style={{fontSize:16,color:"black"}}>Ver más</Text>
            </View>
            <FlatList
                data={data}
                horizontal={true}
                keyExtractor={data => data.id.toString()}
                numColumns={1}
                renderItem={(data)=>{
                    return (
                        <ArticulosDestacadosCard data={data}/>
                    )
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                width: 10,
                            }} />
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})