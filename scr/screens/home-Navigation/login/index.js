import React, {useState, useEffect} from "react";
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { ModalCustom } from "../../../components";
import { LoadPlayer } from "../../../store/actions";
import { styles } from "./styles";
import { useDispatch } from "react-redux";


const Login = ({navigation}) =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(LoadPlayer())
    },[])

    const [modalOn, setModalOn] = useState(false);

    return(
        <TouchableWithoutFeedback style={styles.container}>
        <View style={styles.container}>
            <View style={styles.containerIMG}>
                <Image style={styles.img} source={require("../../../../assets/images/PiedraPapelOTijera.png")} />
            </View>
            <View style={styles.containerBTN}>
                <TouchableOpacity style={styles.btnStart} onPress={()=> setModalOn(!modalOn)}>
                    <Text style={styles.textBTNStart}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            <ModalCustom modalOn={modalOn} setModalOn={setModalOn} navigation={navigation} />
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Login;
