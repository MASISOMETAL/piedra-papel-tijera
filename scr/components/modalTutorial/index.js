import React from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ModalTutorial = ({modalTutoOn, setModalTutoOn, navigation}) =>{
    return(
        <>
            <Modal  visible={modalTutoOn} transparent={true} animationType="slide" >
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnCerrar} onPress={()=> setModalTutoOn(false)}>
                    <Text style={styles.textCerrar}>X</Text>
                </TouchableOpacity>
                <View style={styles.containerModal}>
                    <Text style={styles.text}>Tutorial</Text>
                    <Image style={styles.img} source={require("../../../assets/images/tutorial.png")} />
                </View>
            </View>
            </Modal>
        </>
    )
}

export default ModalTutorial;