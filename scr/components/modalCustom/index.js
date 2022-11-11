import React, {useState} from "react";
import { View, Text, Modal, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import RenderItemPlayer from "../RenderItemPlayers";
import ModalCustomCreatePlayer from "../modalCustomCreatePlayer";



const ModalCustom = ({modalOn, setModalOn, navigation}) =>{

    const players = useSelector((state)=> state.PlayerReductor.players)
    const [modalCreatePlayer, setmodalCreatePlayer] = useState(false);

    const RenderItem = ({item}) =>(
        <RenderItemPlayer item={item} modalOn={modalOn} setModalOn={setModalOn} navigation={navigation} />
    )

    return(
        <>
            <Modal  visible={modalOn} transparent={true} animationType="slide" >
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnCerrar} onPress={()=> setModalOn(false)}>
                    <Text style={styles.textCerrar}>X</Text>
                </TouchableOpacity>
                <View style={styles.containerModal}>
                    <FlatList
                        data={players}
                        keyExtractor={(item)=> item.nombre}
                        renderItem={RenderItem}
                    />
                    <TouchableOpacity style={styles.btn} onPress={()=> setmodalCreatePlayer(!modalCreatePlayer)}>
                        <Text style={styles.text}>Crear Usuario</Text>
                    </TouchableOpacity>
                    <ModalCustomCreatePlayer modalCreatePlayer={modalCreatePlayer} setmodalCreatePlayer={setmodalCreatePlayer} />
                </View>
            </View>
            </Modal>
        </>
    )
}

export default ModalCustom;