import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
    },
    containerBtnPC:{
        flex: 3,
        //backgroundColor: Colors.rose,
        alignItems: "center",

    },
    containerPuntos:{
        marginTop: height * 0.15,
    },
    containerBtnUser:{
        flex: 1,
        //backgroundColor: Colors.lightBlue,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btnPC:{
        height: width * 0.4,
        width: width * 0.4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
    },
    imagePC:{
        height: width * 0.4,
        width: width * 0.4,
        resizeMode: "cover",
    },
    btn:{

        borderRadius: 15,
        height: width * 0.27,
        width: width * 0.27,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    imageUser:{
        height: width * 0.27,
        width: width * 0.27,
        resizeMode: "cover",
    },
});