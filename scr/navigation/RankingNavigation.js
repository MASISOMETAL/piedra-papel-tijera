import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ranking } from "../screens";

const Stack = createNativeStackNavigator();

const RankingNavigation = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="RankingNav" component={Ranking} />
        </Stack.Navigator>
    )
}

export default RankingNavigation;