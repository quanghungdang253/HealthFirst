import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Tabchoose from './components/Tabchoose/Tabchoose';
function Main_Body({navigation}) {
       
    return (
            <View style={styled.container}>
                    {/* <Tabchoose/> */}
                    <TouchableOpacity
                                onPress={navigation.navigate("Tinhtoan")}
                    > 
                                Chuyển trang 
                     </TouchableOpacity>
            </View>
    );
}
const styled = StyleSheet.create({
                container: {
                        height: 100,
                        width: 330,
                        marginLeft: 15,
                        backgroundColor: 'white'
                }
})

export default Main_Body;