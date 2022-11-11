import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { PlayerSelected } from "../../store/actions";

const RenderItemPlayer = ({item, modalOn, setModalOn, navigation}) =>{
    
    const dispatch = useDispatch();
    

    const onHandlePicker = () =>{
        setModalOn(!modalOn);
        dispatch(PlayerSelected(item))
        navigation.navigate("GameNav")
        //console.warn(item.nombre);
    };

    return(
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btn} onPress={onHandlePicker}>
                    <Text style={styles.textName}>{item.nombre}</Text>
                    <Text style={styles.textPoint}>Puntaje: {item.puntos}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RenderItemPlayer;