import {View,Text} from 'react-native'
import GlobalStyle from '../utils/GlobalStyle';


const DashboardScreen = () => {
    return(
        <View style = {GlobalStyle.body}>
            <Text style={GlobalStyle.textStyle}>
                DashBoard Screen
            </Text>
        </View>
    )
}

export default DashboardScreen;