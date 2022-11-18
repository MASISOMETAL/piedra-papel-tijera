import { Perder, SaveData, Ganar } from "../../../store/actions";

export const pickItem = ({valor, dispatch, Alert, setPcSelected, puntos, nombre}) =>{
    const NumRandom = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (valor === "Piedra") {
        if (NumRandom === 0) {
            setPcSelected(require("../../../../assets/images/Piedra.png"))
            Alert.alert("Piedra con Piedra Empatan")
            return
        }
        if (NumRandom === 1) {
            setPcSelected(require("../../../../assets/images/Papel.png"))
            dispatch(Perder(puntos, nombre))
            dispatch(SaveData(nombre, puntos, nombre))
            Alert.alert("El Papel le gana a la Piedra, pierdes 1 punto")
            return
        }
        if (NumRandom === 2) {
            setPcSelected(require("../../../../assets/images/Tijera.png"))
            dispatch(Ganar(puntos, nombre))
            dispatch(SaveData(nombre, puntos, nombre))
            Alert.alert("La Piedra le gana a la Tijera, ganas 1 punto")
            return
        }
    }
    if (valor === "Papel") {
        if (NumRandom === 0) {
            setPcSelected(require("../../../../assets/images/Piedra.png"))
            dispatch(Ganar(puntos, nombre))
            dispatch(SaveData(nombre, puntos, nombre))
            Alert.alert("El Papel le gana a la Piedra, ganas 1 punto")
            return
        }
        if (NumRandom === 1) {
            setPcSelected(require("../../../../assets/images/Papel.png"))
            Alert.alert("Papel con Papel Empatan")
            return
        }
        if (NumRandom === 2) {
            setPcSelected(require("../../../../assets/images/Tijera.png"))
            dispatch(Perder(puntos, nombre))
            dispatch(SaveData(nombre, puntos, nombre))
            Alert.alert("La Tijera le gana al Papel, pierdes 1 punto")
            return
        }
    }
    if (valor === "Tijera") {
        if (NumRandom === 0) {
            setPcSelected(require("../../../../assets/images/Piedra.png"))
            dispatch(Perder(puntos, nombre))
            dispatch(SaveData(nombre, puntos, nombre))
            Alert.alert("La Piedra le gana a la Tijera, pierdes 1 punto")
            return
        }
        if (NumRandom === 1) {
            setPcSelected(require("../../../../assets/images/Papel.png"))
            dispatch(Ganar(puntos, nombre))
            dispatch(SaveData(nombre, puntos, nombre))
            Alert.alert("La Tijera le gana al Papel, ganas 1 punto")
            return
        }
        if (NumRandom === 2) {
            setPcSelected(require("../../../../assets/images/Tijera.png"))
            Alert.alert("Tijera con Tijera Empatan")
            return
        }
    }
}