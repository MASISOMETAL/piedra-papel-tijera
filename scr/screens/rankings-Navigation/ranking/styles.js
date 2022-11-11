import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
    },
});