import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        marginVertical: height * 0.01,
        width: width,
        height: height * 0.05,
        justifyContent: "center",
    },
    containerBtn:{

    },
    btn:{
        flexDirection: "row",
    },
    textName:{
        width: width * 0.4,
        marginLeft: width * 0.05,
        //backgroundColor: Colors.secondary,
    },
    textPoint:{
        flex: 1,
        marginRight: width * 0.05,
        //backgroundColor: Colors.stack3,
    },
});