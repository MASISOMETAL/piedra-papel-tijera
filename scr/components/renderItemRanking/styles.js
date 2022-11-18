import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerRow:{
        flexDirection: "row",
        marginTop: height * 0.01,
    },
    containerName:{
        justifyContent: "center",
        width: width * 0.73,
        backgroundColor: Colors.white,
        marginHorizontal: 5,
        padding: 4,
    },
    containerPoint:{
        justifyContent: "center",
        width: width * 0.1,
        marginRight: 5,
        alignItems: "center",
        backgroundColor: Colors.white,
        padding: 4,
    },
    containerRank:{
        width: width * 0.1,
        marginLeft: 5,
        alignItems: "center",
        padding: 3,
    },
    imageMedal:{
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.08,
        height: width * 0.08,
    },
    textRank:{
        color: Colors.black,
        fontFamily: "Inter-Bold",
    },
})