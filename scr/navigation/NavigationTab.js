import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./homeNavigation";
import RankingNavigation from "./RankingNavigation";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const NavigationTab = () =>{
    return(
        <BottomTab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen 
                name="HomeTab" 
                component={HomeNavigation} 
                options={{
                    title: "Home",
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name= {focused ? "home" : "home-outline"}
                            size={22}
                            color={Colors.primary}
                        />
                    )
                }}
            />
            <BottomTab.Screen 
                name="RankingTab" 
                component={RankingNavigation} 
                options={{
                    title: "Ranking",
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name= {focused ? "ribbon" : "ribbon-outline"}
                            size={22}
                            color={Colors.primary}
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default NavigationTab;