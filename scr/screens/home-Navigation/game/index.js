import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image, Alert, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Ganar, Perder, SaveData } from "../../../store/actions";
import { pickItem } from "./function";

const Game = () =>{

    const dispatch = useDispatch();
    const selected = useSelector((state)=> state.PlayerReductor.selected);
    const playeractive = useSelector((state)=> state.PlayerReductor.players);
    
    const filtrado = playeractive.filter((i)=> i.nombre == selected.nombre)
    
    const [pcSelected, setPcSelected] = useState(require("../../../../assets/images/PiedraPapelOTijera.png"));

    const pick = (valor) =>{
        pickItem({valor: valor, dispatch: dispatch, Alert: Alert, setPcSelected: setPcSelected, puntos: filtrado[0].puntos, nombre: filtrado[0].nombre});
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
                <TouchableOpacity style={styles.btn} onPress={()=> pick("Piedra")}>
                <Image style={styles.imageUser} source={require("../../../../assets/images/Piedra.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=> pick("Papel")}>
                <Image style={styles.imageUser} source={require("../../../../assets/images/Papel.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=> pick("Tijera")}>
                <Image style={styles.imageUser} source={require("../../../../assets/images/Tijera.png")} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Game;
