import React from "react"

import { Menu } from "../../screens/menu"
import { Inicio } from "../../screens/inicio"
import { Categorias } from "../../screens/categorias";

import { Header } from "../../components/Header";

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import {Dimensions} from 'react-native';
import { Categoria } from "../../screens/categoria";
import { Carrito } from "../../screens/carrito";
import { Perfil } from "../../screens/perfil";
const screenWidth = Dimensions.get("screen").width;

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            drawerContent={(props) => <Menu {...props} />}
            initialRouteName="Inicio"
            screenOptions={{
                drawerStyle: {
                 width: screenWidth,
               },
               header: ({ navigation, route, options }) => {
              
                return <Header navigation={navigation}/>
              }
              //drawerActiveBackgroundColor:"white",
              // drawerActiveTintColor:"black",
             }}
             
         >
            <Drawer.Screen name="Inicio" component={Inicio} options={{title:"Inicio"}} />
            <Drawer.Screen name="Categorias" component={Categorias} options={{title:"Categorías"}} />
            <Drawer.Screen name="Perfil" component={Perfil} options={{title:"Perfil"}} />
            <Drawer.Screen name="Carrito" component={Carrito} options={{title:"Carrito"}} />
            <Drawer.Screen name="Categoria" component={Categoria} options={{title:"Categoría"}} />
        </Drawer.Navigator>
    )
}