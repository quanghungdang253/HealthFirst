import React from 'react';
import { Text, Button, View, TextInput, Image  } from 'react-native';
import styled from '../style/checkIndexStyle';
import Tabchoose from '../Tabchoose';
import Footer from '../../../../../../../Common/Footer/Footer';
function Check_index(props) {
    return (
            <View style={styled.container}>
                       <View style={[styled.boxTitle1 , styled.text]}>
                                <View style={styled.before}>   
                                    <Image source={require('../image/Bmi.png')} style={[styled.image , styled.image__bmi]}/>
                                </View>
                                <Text style={[styled.text , styled.textTitle]}> KIỂM TRA CHỈ SỐ BMI ONLINE  </Text>
                       </View>
                       <View style={styled.mainContent}>
                            <View style={styled.boxTitle2}>  
                                <Text style={[styled.textTitle1]}> ĐO CHỈ SỐ CÂN NẶNG CHIỀU CAO </Text>
                            </View>
                            <View style={styled.boxInput}>
                                    <TextInput placeholder='Nhập vào chiều cao' style={[styled.inputName, styled.input]}/>
                                    <TextInput placeholder='Nhập vào cân năng' style={[styled.inputName, styled.input]}/>
                                    <TextInput placeholder='Nhập vào Ngày ' style={[styled.inputName, styled.input]}/>
                                    <TextInput placeholder='Nhập vào tên' style={[styled.inputName, styled.input]}/>
                                    <TextInput placeholder='Nhập vào tên' style={[styled.inputName, styled.input]}/>
                            </View>
                       </View>

                    <View style={styled.Footer}>      
                             <Footer/>
                    </View>
            </View>
    );
}

export default Check_index;