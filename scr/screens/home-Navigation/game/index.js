import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image, Alert, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Ganar, Perder, SaveData } from "../../../store/actions";

const Game = () =>{

    const dispatch = useDispatch();
    const selected = useSelector((state)=> state.PlayerReductor.selected);
    const playeractive = useSelector((state)=> state.PlayerReductor.players);
    
    const filtrado = playeractive.filter((i)=> i.nombre == selected.nombre)
    
    const [pcSelected, setPcSelected] = useState(require("../../../../assets/images/PiedraPapelOTijera.png"));
    const Piedra = 0; const Papel = 1; const Tijera = 2;

    const onHandlePiedra = () =>{
        const NumRandom = Math.floor(Math.random() * (Tijera - Piedra + 1) + Piedra);
        if (NumRandom == 0) {
            setPcSelected(require("../../../../assets/images/Piedra.png"))
            Alert.alert("Piedra con Piedra Empatan")
            return
        }
        if (NumRandom == 1) {
            setPcSelected(require("../../../../assets/images/Papel.png"))
            dispatch(Perder(filtrado[0].puntos, filtrado[0].nombre))
            dispatch(SaveData(filtrado[0].nombre, filtrado[0].puntos, filtrado[0].nombre))
            Alert.alert("El Papel le gana a la Piedra, pierdes 1 punto")
            return
        }
        if (NumRandom == 2) {
            setPcSelected(require("../../../../assets/images/Tijera.png"))
            dispatch(Ganar(filtrado[0].puntos, filtrado[0].nombre))
            dispatch(SaveData(filtrado[0].nombre, filtrado[0].puntos, filtrado[0].nombre))
            Alert.alert("La Piedra le gana a la Tijera, ganas 1 punto")
            return
        }
    };

    const onHandlePapel = () =>{
        const NumRandom = Math.floor(Math.random() * (Tijera - Piedra + 1) + Piedra);
        if (NumRandom == 0) {
            setPcSelected(require("../../../../assets/images/Piedra.png"))
            dispatch(Ganar(filtrado[0].puntos, filtrado[0].nombre))
            dispatch(SaveData(filtrado[0].nombre, filtrado[0].puntos, filtrado[0].nombre))
            Alert.alert("El Papel le gana a la Piedra, ganas 1 punto")
            return
        }
        if (NumRandom == 1) {
            setPcSelected(require("../../../../assets/images/Papel.png"))
            Alert.alert("Papel con Papel Empatan")
            return
        }
        if (NumRandom == 2) {
            setPcSelected(require("../../../../assets/images/Tijera.png"))
            dispatch(Perder(filtrado[0].puntos, filtrado[0].nombre))
            dispatch(SaveData(filtrado[0].nombre, filtrado[0].puntos, filtrado[0].nombre))
            Alert.alert("La Tijera le gana al Papel, pierdes 1 punto")
            return
        }
    };

    const onHandleTijera = () =>{
        const NumRandom = Math.floor(Math.random() * (Tijera - Piedra + 1) + Piedra);
        if (NumRandom == 0) {
            setPcSelected(require("../../../../assets/images/Piedra.png"))
            dispatch(Perder(filtrado[0].puntos, filtrado[0].nombre))
            dispatch(SaveData(filtrado[0].nombre, filtrado[0].puntos, filtrado[0].nombre))
            Alert.alert("La Piedra le gana a la Tijera, pierdes 1 punto")
            return
        }
        if (NumRandom == 1) {
            setPcSelected(require("../../../../assets/images/Papel.png"))
            dispatch(Ganar(filtrado[0].puntos, filtrado[0].nombre))
            dispatch(SaveData(filtrado[0].nombre, filtrado[0].puntos, filtrado[0].nombre))
            Alert.alert("La Tijera le gana al Papel, ganas 1 punto")
            return
        }
        if (NumRandom == 2) {
            setPcSelected(require("../../../../assets/images/Tijera.png"))
            Alert.alert("Tijera con Tijera Empatan")
            return
        }
    };

    return(
        <ImageBackground 
            style={styles.imageBackGround} 
            source={require("../../../../assets/images/fondo.gif")} 
        >
            <View style={styles.containerBtnPC}>
                <View style={styles.btnPC}>
                    <Image style={styles.imagePC} source={pcSelected} />
                </View>
                <View style={styles.containerPuntos}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.textPoint}>Puntaje:  </Text>
                        <Text>{filtrado[0].puntos}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerBtnUser}>
                <TouchableOpacity style={styles.btn} onPress={onHandlePiedra}>
                <Image style={styles.imageUser} source={require("../../../../assets/images/Piedra.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={onHandlePapel}>
                <Image style={styles.imageUser} source={require("../../../../assets/images/Papel.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={onHandleTijera}>
                <Image style={styles.imageUser} source={require("../../../../assets/images/Tijera.png")} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Game;
