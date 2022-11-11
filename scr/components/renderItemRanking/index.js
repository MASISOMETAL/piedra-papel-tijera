import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const RenderItemRanking = ({item}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <View style={styles.containerName}>
                    <Text>{item.nombre}</Text>
                </View>
                <View style={styles.containerPoint}>
                    <Text>{item.puntos}</Text>
                </View>
            </View>
        </View>
    )
}

export default RenderItemRanking;