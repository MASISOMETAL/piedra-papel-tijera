import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
    },
    containerIMG:{
        width: width,
        marginTop: height * 0.03,
        alignItems: "center",
    },
    img:{
        height: width * 0.55,
        width: width * 0.55,
    },
    containerBTN:{
        alignItems: "center",
        marginTop: height * 0.03,
    },
    btnStart:{
        width: width * 0.6,
        height: height * 0.05,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: Colors.white,
    },
    textBTNStart:{
        fontFamily: "Inter-Bold",
        fontSize: 16,
    },
    imageBackGround:{
        flex: 1,
        width: width,
        height: height,
    },
    containerInfo:{
        //backgroundColor: Colors.yellow,
        width: width,
        height: height * 0.4,
        marginTop: height * 0.036,
        justifyContent: "center",
        alignItems: "center",
    },
    btnInfo:{
        //justifyContent: "center",
        alignItems: "center",
        width: width * 0.32,
        height: width * 0.32,
        marginVertical: width * 0.04,
        marginHorizontal: width * 0.05,
        borderRadius: 10,
        backgroundColor: Colors.white,
    },
    iconBtn:{
        marginTop: height * 0.04,
    },
    textBtn:{
        marginTop: height * 0.015,
    },
});