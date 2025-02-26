import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from './styles/stylesSelectmenu';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import FloatingButton from '../../../../../../Common/floating-button';
function Selectmenu(props) {
    const navigation = props.navigation;
    const navigation1 = useNavigation();
    let dataBtn = [
        {id: 0, content: "Tập luyện và hoạt động thể chất", linkImage: require('./Image/gym.jpg'), linkparams: "Check_index"},
        {id: 1, content: "Kiểm tra sức khỏe và thể chất", linkImage: require('./Image/healthcheck.jpg'),  linkparams: "Check_index"},
        {id: 2, content: "Theo dõi chế độ ăn uống", linkImage: require('./Image/food.jpg'),  linkparams: "Check_index"},
        {id: 3, content: "Tập luyện và hoạt động thể chất", linkImage: require('./Image/gym.jpg'),  linkparams: "Check_index"}
    ]
    return (
        <View style={styled.container}>
            <View style={styled.Selectmenu}>    
                 {dataBtn.map((Item) => (
                <FloatingButton
                key={Item.id}
                    style={[styled.Button , styled.Button_Activities]}
        onPress={() => navigation.navigate(Item.linkparams, {content: "CheckHealth"})}
                >                   
                    <ImageBackground 
                        source={Item.linkImage}
                        style={styled.ImageBackground}>                      
                   </ImageBackground>
                            <Text style={styled.Text}> {Item.content} </Text>
                </FloatingButton>
                 ))}
            </View>
        </View>
    );
}

export default Selectmenu;