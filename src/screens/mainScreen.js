import { View, StyleSheet, Text } from "react-native/types"

const MainScreen = () =>{
    return(
        <View style = {styles.body}>
            <Text>
                This is MainScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1
    }
})