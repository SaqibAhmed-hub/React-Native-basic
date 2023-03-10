import { View, StyleSheet, Text } from "react-native"

const MainScreen = ({navigation, route}) =>{

    const item = route.params

    return(
        <View style = {styles.body}>
            <Text style ={style.textStyle}>
                Item Selected : {JSON.stringify(item.items)}
            </Text>
        </View>
    )
}

const style = ({
    textStyle : {
        fontSize: 22,
        alignItems: 'center',
        fontWeight: "700",
        letterSpacing: 1.2
    }
})

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    

    }
})

export default MainScreen;