import React from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import Tabchoose from '../Tabchoose';
import Footer from '../../../../../../../Common/Footer/Footer';
function Check_index(props) {
    return (
            <View style={styled.container}>
                        <Text> Đầy là trang kiểm tra chỉ số sức khỏe </Text>
                     
                        <Footer/>
            </View>
    );
}
const styled = StyleSheet.create({
            container: {
               
                backgroundColor:'white'
            }
})
export default Check_index;