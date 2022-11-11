import React, {useState, useEffect} from "react";
import { View, Text, FlatList } from "react-native";
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

    const RenderItem = ({item}) =>(
        <RenderItemRanking item={item} />
    )

    return(
        <View style={styles.container}>
            <FlatList
            data={userData}
            keyExtractor={(item)=> item.nombre}
            renderItem={RenderItem}
            />
        </View>
    )
}

export default Ranking;
