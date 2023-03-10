import { View, StyleSheet, Text } from "react-native"
import GlobalStyle from "../utils/GlobalStyle"

const MainScreen = () =>{

    return(
        <View style = {GlobalStyle.body}>
            <Text style ={GlobalStyle.textStyle}>
               MainScreen
            </Text>
        </View>
    )
}

export default MainScreen;