import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {


  let  [count,setCount ] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={{
        color :"white",
        backgroundColor : "black",
        width : 60,
        height  : 60 ,
        borderRadius  : 30,
        overflow  : 'hidden',
        alignContent  : 'center',
        textAlign :'center',
        display : 'flex',
        justifyContent  : 'center',
        alignItems : 'center',
        fontSize: 40
      }}>
        👋
      </Text>
      <Text style={{
        color :"#404c57",
        fontSize: 20
      }}>
         I hate react native { count } times
      </Text>
      <View style={{
        display : "flex",
        flexDirection : "row",
        alignItems :  "center",
        justifyContent : "center",
        gap : 10
      }}>
        <Pressable onPress={() => setCount(count++)} title='Increment' style={{ }}> 
          <Text style={{
            borderRadius : 20,
            overflow : 'hidden',
            paddingHorizontal : 34,
            paddingVertical : 16 ,
            backgroundColor : 'black',
            color : 'white',
            fontSize  : 20
          }}> Increment </Text>
        </Pressable>
        <Pressable onPress={() => setCount(count--)} title='Increment' style={{ }}> 
          <Text style={{
            borderRadius : 20,
            overflow : 'hidden',
            paddingHorizontal : 34,
            paddingVertical : 16 ,
            backgroundColor : 'black',
            color : 'white',
            fontSize  : 20
          }}> Decrement </Text>
        </Pressable>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9edff',
    color : "white",
    gap :20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
