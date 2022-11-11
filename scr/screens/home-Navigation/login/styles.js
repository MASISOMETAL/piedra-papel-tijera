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
        backgroundColor: Colors.yellow,
    },
    textBTNStart:{
        fontFamily: "Inter-Bold",
        fontSize: 16,
    },
});