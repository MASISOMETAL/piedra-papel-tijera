import React, {useState} from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions";

const ModalCustomCreatePlayer = ({modalCreatePlayer, setmodalCreatePlayer}) =>{
   
    const dispatch = useDispatch();
    const [nameUser, setNameUser] = useState("");

    const onHandleCreatePlayer = () =>{
        if (nameUser === "") {
            Alert.alert("Escribi algo gil");
            return;
        }
        dispatch(signUp(nameUser))
        setmodalCreatePlayer(false);
        setNameUser("");
    };

    return(
        <>
            <Modal  visible={modalCreatePlayer} transparent={true} animationType="slide" >
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnCerrar} onPress={()=> setmodalCreatePlayer(false)}>
                    <Text style={styles.textCerrar}>X</Text>
                </TouchableOpacity>
                <View style={styles.containerModal}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese Nombre de usuario"
                        onChangeText={(text) => setNameUser(text)}
                        value={nameUser}
                        maxLength={20}
                    />
                    <TouchableOpacity style={styles.btn} onPress={onHandleCreatePlayer}>
                        <Text style={styles.text}>Crear</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
        </>
    )
}

export default ModalCustomCreatePlayer;