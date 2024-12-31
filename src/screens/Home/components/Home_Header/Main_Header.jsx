import React from 'react';
import { View,Text,Button,TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import Search from './components/Search';

function Main_Header(props) {
    return (
                <View style={style.Container}>
                         
                            <Search/>
                </View>
    );
}

const style = StyleSheet.create({
    Container : {
        height: 60
        
       
       
    }

})
export default Main_Header;