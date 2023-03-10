import React, { useState } from 'react';
import {
    Alert, FlatList, Platform, Pressable, Text, View
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';


export default Fruit = ({ navigation }) => {

    const [arrayList, setArrayList] = useState([
        "Apple", "Orange", "Mango", "Banana", "Grape", "Pomegranate", "Pineapple",
        "Item1", "Item2", "item3", "Item4", "Item5", "Item6", "Item7"
    ]);

    const onPressHandler = () => {
        if (Platform.OS === 'android') {
            navigation.navigate('Main', {
                items: listItem.item
            });
        } else {
            Alert.alert(
                'List Item',
                listItem.item,
            )
        }
    }
    return (
        <FlatList
            data={arrayList}
            renderItem={listItem => (
                <Pressable
                    onPress={() => { onPressHandler }}>
                    <View
                        style={{
                            flex: 1,
                            padding: 8,
                            margin: 8,
                            borderWidth: 1,
                            backgroundColor: '#ffffbd'
                        }}>
                        <Text style={GlobalStyle.listTextStyle}>{listItem.item}</Text>
                    </View>
                </Pressable>
            )
            }
        />
    );
}
