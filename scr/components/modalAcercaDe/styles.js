import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
    },
    containerModal:{
        height: height * 0.45,
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        marginHorizontal: height * 0.03,
        marginBottom: height * 0.1,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 10,
        shadowColor: Colors.white,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textTitle:{
        fontFamily: "Inter-Bold",
        fontSize: 20,
    },
    textInfo:{
        marginTop: height * 0.01,
        fontFamily: "Inter-Regular",
        fontSize: 14,
    },
    textInfo2:{
        marginTop: height * 0.04,
        fontFamily: "Inter-Regular",
        fontSize: 14,
    },
    textInfoContainer:{
        marginHorizontal: width * 0.03,
        marginVertical: height * 0.03,
        marginTop: height * 0.01,
        fontFamily: "Inter-Regular",
        fontSize: 14,
    },
    btnCerrar:{
        height: width * 0.08,
        width: width * 0.08,
        backgroundColor: Colors.red,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 7,
        alignSelf: "flex-end",
        marginRight: width * 0.07,
        marginBottom: height * 0.01,
    },
    textCerrar:{
        fontFamily: "Inter-Bold",
        fontSize: 16,
        color: Colors.white,
    },
    containerInfo:{
        backgroundColor: Colors.yellow,
        marginTop: height * 0.03,
        borderRadius: 10,
        borderColor: Colors.red,
        borderWidth: 1,
        //height: height * 0.3,
        width: width * 0.8,
    },
});