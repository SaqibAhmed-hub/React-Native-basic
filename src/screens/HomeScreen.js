import React from 'react';
import { View } from 'react-native';
import Fruit from '../components/Fruit';
import GlobalStyle from '../utils/GlobalStyle';


// Home Screen
const HomeScreen = ({ navigation }) => {

    return (
        <View style={GlobalStyle.container}>
            <Fruit navigation={navigation} />
        </View>
    );
}

export default HomeScreen;