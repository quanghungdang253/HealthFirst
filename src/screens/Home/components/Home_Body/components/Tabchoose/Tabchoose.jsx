import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Button,Text, Image } from 'react-native';
import Check_index from './components/checkIndex';
import { FontAwesome } from '@expo/vector-icons';


function Tabchoose(props) {
        const navigation = props.navigation;
      
        const [customs, setCustoms] = useState(false);
    return (
        
            <View  style={styled.container}>
                <View style={styled.container__tabchoose}>
                   
                     <TouchableOpacity
                      style={[styled.Button, styled.Buttoncheck]}
                      onPress={() => navigation.navigate("Check_index")}
                      
                      >
                        <Image
                          source={require('./image/bmiNew.jpg')}
                          style={[styled.iconBmi, styled.icon]}
                        />
                                <Text style={styled.text_tabchoose}>  </Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                      style={[styled.Button, styled.Buttoncheck]}
                      onPress={() => navigation.navigate("Check_index")}>
                                         
                                <FontAwesome name='search' style={[styled.iconsearch, styled.icon]}/>
                                <Text style={styled.text_tabchoose}> Tìm kiếm  </Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                      style={[styled.Button, styled.Buttoncheck]}
                      onPress={() => navigation.navigate("Check_index")}
                      
                      >
                                <Image
                                        source={require('./image/khaibaoyte.jpg')}
                                        style={[styled.iconBmi, styled.icon]}
                                />
                                <Text style={styled.text_tabchoose}> Khai báo y tế </Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                      style={[styled.Button, styled.Buttoncheck]}
                      onPress={() => navigation.navigate("Check_index")}
                      
                      >
                              
                                <FontAwesome name='book'  style={[styled.iconbook__health, styled.icon]} />
                                <Text style={styled.text_tabchoose}> Cẩm nang sức khỏe </Text>
                     </TouchableOpacity>
                    
                </View>  
                     
                            
                        
            </View>
    );
}
const styled = StyleSheet.create({
        //===========================style chung =====================================
        text_tabchoose: {
                        fontSize: 12,
                        fontWeight: '600',
                        textAlign:'center',
                        width: 80,      
        },
        iconbook__health: {
                        fontSize:30
        },
        Button: {
                paddingTop: 15,
                paddingBottom:15,
                paddingRight:2,
                paddingLeft:2,
              
                alignItems:'center',
                justifyContent:'center',
                backgroundColor: 'white',
               
                // width: 50,
                height:80
                
        },
        //==============================================================================
        container: {
                flex:1,
                flexDirection: 'row',
                                        justifyContent:'center',
                                        
                              
                                
                },
        container__tabchoose: {
                        flex: 1,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        gap: 5,
                        backgroundColor: "#00cec9",
                        height:100,
                       
                },
        icon: {
                         height: 25,
                         width:30,
                        fontSize:25
                },
                iconsearch: {
                        fontSize: 25
                }
              

})

export default Tabchoose;