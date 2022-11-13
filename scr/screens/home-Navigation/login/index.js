import React, {useState, useEffect} from "react";
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { ModalCustom } from "../../../components";
import { LoadPlayer } from "../../../store/actions";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/colors";

const Login = ({navigation}) =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(LoadPlayer())
    },[])

    const [modalOn, setModalOn] = useState(false);

    return(
        <ImageBackground 
            style={styles.imageBackGround} 
            source={require("../../../../assets/images/fondo.gif")}
        >
            <View style={styles.containerIMG}>
                <Image style={styles.img} source={require("../../../../assets/images/PiedraPapelOTijera.png")} />
            </View>
            <View style={styles.containerBTN}>
                <TouchableOpacity style={styles.btnStart} onPress={()=> setModalOn(!modalOn)}>
                    <Text style={styles.textBTNStart}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerInfo}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.btnInfo}>
                        <Ionicons name="newspaper" size={30} color={Colors.primary} style={styles.iconBtn} />
                        <Text style={styles.textBtn}>Tutorial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInfo}>
                        <Ionicons name="information-circle" size={30} color={Colors.primary} style={styles.iconBtn} />
                        <Text style={styles.textBtn}>Acerca de</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.btnInfo}>
                        <Ionicons name="git-branch" size={30} color={Colors.primary} style={styles.iconBtn} />
                        <Text style={styles.textBtn}>Version 1.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInfo}>
                        <Ionicons name="settings" size={30} color={Colors.primary} style={styles.iconBtn} />
                        <Text style={styles.textBtn}>Configuracion</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalCustom modalOn={modalOn} setModalOn={setModalOn} navigation={navigation} />
        </ImageBackground>
    )
}

export default Login;
