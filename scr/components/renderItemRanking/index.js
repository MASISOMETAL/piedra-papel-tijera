import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

const RenderItemRanking = ({item, index}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <View style={styles.containerRank}>
                    <ImageBackground 
                        style={styles.imageMedal}
                        source={require("../../../assets/images/medalgame.png")}
                    >
                        <Text style={styles.textRank}>{index + 1}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.textRank}>{item.nombre}</Text>
                </View>
                <View style={styles.containerPoint}>
                    <Text style={styles.textRank}>{item.puntos}</Text>
                </View>
            </View>
        </View>
    )
}

export default RenderItemRanking;