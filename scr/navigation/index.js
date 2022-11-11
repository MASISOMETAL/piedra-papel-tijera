import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./NavigationTab";

const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <NavigationTab />
        </NavigationContainer>
    )
}

export default AppNavigator;