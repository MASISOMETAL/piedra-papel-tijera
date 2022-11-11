import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerRow:{
        flexDirection: "row",
    },
    containerName:{
        flex: 3,
        marginVertical: 1,
        backgroundColor: Colors.secondary,
        marginLeft: 10,
        padding: 4,
    },
    containerPoint:{
        flex: 1,
        marginRight: 10,
        marginVertical: 1,
        alignItems: "center",
        backgroundColor: Colors.rose,
        padding: 4,
    },
})