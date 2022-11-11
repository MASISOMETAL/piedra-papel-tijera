import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login, Game} from "../screens";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const HomeNavigation = () =>{

    const selected = useSelector((state)=> state.PlayerReductor.selected)
    const title = selected.nombre;

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="LoginNav" 
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="GameNav" 
                component={Game} 
                options={{
                    title: title,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation;