import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useSelector} from "react-redux";
import { RenderItemRanking } from "../../../components";

const Ranking = () =>{

    const userData = useSelector((state)=> state.PlayerReductor.players);   

    const newOrder = userData;
    newOrder.sort((a, b) =>{
        if (a.puntos < b.puntos) {
            return -1;
        } 
        if (a.puntos > b.puntos) {
            return 1;
        }
        return 0
    })
    newOrder.reverse()

    const RenderItem = ({item, index}) =>(
        <RenderItemRanking item={item} index={index} />
    )

    return(
        <ImageBackground 
            style={styles.imageBackGround} 
            source={require("../../../../assets/images/fondo.gif")} 
        >
            <FlatList
            data={userData}
            keyExtractor={(item)=> item.nombre}
            renderItem={RenderItem}
            />
        </ImageBackground>
    )
}

export default Ranking;
