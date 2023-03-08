import React, { useState } from 'react';
import {
  Alert, FlatList, Platform, Pressable, StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';

function App(): JSX.Element {

  const onPressHandler = () => {
    {
      Alert.alert(
        'Alert',
        'This is an alert message',
      )
    }
  }

  return (
    <View style={styles.container}>
         <Fruit/>
      <Pressable
        onPress={onPressHandler}>
        <View style={
          {
            width: 380,
            margin:8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff2245',
            borderRadius:8
          }
        }>
          <Text style={{
            alignItems: 'center',
            padding: 12,
            fontSize: 20,
            color: 'white',
            fontWeight : 'bold',
          }
          }> Submit</Text>
        </View>
      </Pressable>
    </View>

  );
}

// This is a Fruit View
const Fruit = () => {
  const [arrayList, setArrayList] = useState([
    "Apple", "Orange", "Mango", "Banana", "Grape", "Pomegranate", "Pineapple",
     "Item1", "Item2", "item3", "Item4","Item5","Item6","Item7"
  ]);
  {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }}>
        <FlatList
          data={arrayList}
          renderItem={listItem => (
            <Pressable
            onPress={() => {
              if(Platform.OS === 'android'){
                ToastAndroid.show(
                  listItem.item,
                  ToastAndroid.SHORT
                )
              }else{
                 Alert.alert(
                  'List Item',
                  listItem.item,
                 )
              }
            }}>
            <View style={{
              padding: 8,
              margin: 8,
              borderWidth: 1,
              alignItems: 'flex-start',
              backgroundColor: '#ffffbd'

            }}>
              <Text
                style={{
                  fontSize: 22,
                  color: 'black'
                }}
              >{listItem.item}</Text>
            </View>
            </Pressable>
          )
          }

        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#EEEEEE'
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontStyle: 'italic'
  },
  insideText: {
    textAlign: 'center',
    fontSize: 22,
    fontStyle: 'italic'
  },
  listText: {
    textAlign: 'left',
    fontSize: 22,
    fontStyle: 'normal'
  },
  insideView: {
    width: '100%',
    margin: 10,
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    margin: 20,
    padding: 5
  }
});

export default App;
