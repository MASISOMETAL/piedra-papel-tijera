import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ModalAcercaDe = ({modalAcercaDeOn, setModalAcercaDeOn, navigation}) =>{
    return(
        <>
            <Modal  visible={modalAcercaDeOn} transparent={true} animationType="slide" >
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnCerrar} onPress={()=> setModalAcercaDeOn(false)}>
                    <Text style={styles.textCerrar}>X</Text>
                </TouchableOpacity>
                <View style={styles.containerModal}>
                    <Text style={styles.textTitle}>Piedra Papel y Tijera</Text>
                    <Text style={styles.textInfo}>Version 1.0</Text>
                    <Text style={styles.textInfo2}>Copyright 2022 MASISO Inc.</Text>
                    <View style={styles.containerInfo}>
                        <Text style={styles.textInfoContainer}>Aplicacion creada para una amiga
                        con el fin de entretenerle y compartir un gran juego de nuestra infancia</Text>
                    </View>
                </View>
            </View>
            </Modal>
        </>
    )
}

export default ModalAcercaDe;