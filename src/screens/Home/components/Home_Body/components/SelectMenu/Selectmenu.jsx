import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from './styles/stylesSelectmenu';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { ImageBackground } from 'react-native';

function Selectmenu(props) {
    const navigation = props.navigation;
    return (
        <View style={styled.container}>
            <View style={styled.Selectmenu}>    
                
                    <TouchableOpacity
                            style={[styled.Button , styled.Button_Activities]}
                    >
                    <ImageBackground 
                    source={require('./Image/gym.jpg')}
                    style={styled.ImageBackground}    >  
                           
                         
                            </ImageBackground>
                            <Text style={styled.Text}> Tập luyện và hoạt động thể chất </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={[styled.Button , styled.Button_Activities]}
                    >
                    <ImageBackground 
                    source={require('./Image/clock.jpg')}
                    style={styled.ImageBackground}    >  
                           
                         
                            </ImageBackground>
                            <Text style={styled.Text}> Thông báo nhắc nhở </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={[styled.Button , styled.Button_Activities]}>                  
                     <ImageBackground 
                                source={require('./Image/food.jpg')}
                                style={styled.ImageBackground}    >  
                     </ImageBackground>    
                                <Text style={styled.Text}> Theo dõi chế độ ăn uống </Text>
                </TouchableOpacity>
                           
                    <TouchableOpacity
                            style={[styled.Button , styled.Button_Activities]}>
                    
                    <ImageBackground 
                         source={require('./Image/gym.jpg')}
                         style={styled.ImageBackground}>  
                            </ImageBackground>
                            <Text style={styled.Text}> Tập luyện và hoạt động thể chất </Text>
                    </TouchableOpacity>
                   
            </View>

        </View>
    );
}

export default Selectmenu;