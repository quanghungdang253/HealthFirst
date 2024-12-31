import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from './styleFooter';
function Footer(props) {
    // const navigation = props.navigation;
    const navigation = useNavigation(); 
    return (
       <View style={styled.container}>
            <View style={styled.container__navigation}>
                    <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}
                            style={styled.Button}
                    >
                        <FontAwesome name='home' style={[styled.icon, styled.iconHome]}/>
                        <Text>Trang chủ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            onPress={() => navigation.navigate("Check_index")}
                            style={styled.Button}
                    >
                        <FontAwesome name='users' style={[styled.icon, styled.iconHome]}/>
                        <Text>Cộng đồng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() => navigation.navigate("Check_index")}
                            style={styled.Button}
                    >
                        <FontAwesome5 name='newspaper' style={[styled.icon, styled.iconHome]}/>
                        <Text>News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Check_index")}
                        style={styled.Button}>
                    
                        <FontAwesome name='bell' style={[styled.icon, styled.iconHome]}/>
                     
                        <Text>Thông báo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() => navigation.navigate("Check_index")}
                            style={styled.Button}
                    >
                        <FontAwesome name='user' style={[styled.icon, styled.iconHome]}/>
                        <Text>User</Text>
                    </TouchableOpacity>
               </View>
       </View>
    );
}

export default Footer;
