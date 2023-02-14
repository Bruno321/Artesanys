import React from "react"
import { Menu } from "../../screens/menu"
import { Inicio } from "../../screens/inicio"
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
const Drawer = createDrawerNavigator();
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
               drawerLabelStyle:{
                width: screenWidth / 2,
                marginLeft:70,
                fontSize:40,
              }
             }}
         >
            <Drawer.Screen name="Inicio" component={Inicio} options={{title:"Inicio"}} />
            <Drawer.Screen name="Categorias" component={Inicio} options={{title:"Categorías"}} />
            <Drawer.Screen name="Perfil" component={Inicio} options={{title:"Perfil"}} />
            <Drawer.Screen name="Carrito" component={Inicio} options={{title:"Carrito"}} />
        </Drawer.Navigator>
    )
}