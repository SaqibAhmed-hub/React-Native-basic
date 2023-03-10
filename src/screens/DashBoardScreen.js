import {View} from 'react-native'
import GlobalStyle from '../utils/GlobalStyle';


const DashboardScreen = ({navigation, route}) => {
    return(
        <View style = {GlobalStyle.body}>
            <Text>
                DashBoard Screen
            </Text>
        </View>
    )
}

export default DashboardScreen;