import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '../styles/menuChooseStyle';
import FloatingButton from '../../../../../../../../../Common/floating-button';
import Footer from '../../../../../../../../../Common/Footer/Footer';
import InfoMenuChoose from './infoMenuChoose';
import useHandleGetDataShow from '../../../../../../../../../hook/useHandleGetDataShow';
import FastLoadingIndicator from '../../../../../../../../../Common/Loading';

function MenuChoose({ route }) {
  const [data] = useHandleGetDataShow(route.params?.content);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef(null); 

  let Information = [
    { id: 0, content: "Kiểm tra BMI", image: require("../image/bmiNew.jpg"), navigation: "Check-Bmi" },
    { id: 1, content: "Kiểm tra chỉ số sức khỏe", image: require("../image/khaibaoyte.jpg"), navigation: "Check-Bmi" },
    { id: 2, content: "Theo dõi chiều cao", image: require("../image/img-height.jpg"), navigation: "Check-Bmi" },
    { id: 3, content: "Theo dõi cân nặng", image: require("../image/Weight.jpg"), navigation: "Check-Bmi" }
  ];

  useEffect(() => {
    if (data) {
      setLoading(true);
    }
  }, [data]);

  return (
    <ScrollView
    ref={scrollViewRef} 
    style={styled.ScrollView}
    contentContainerStyle={{ flexGrow: 1, minHeight: 600, paddingBottom: 20 }}
    keyboardShouldPersistTaps="handled"
    nestedScrollEnabled={true}
    showsVerticalScrollIndicator={false}
  >
    <View>  
      {!loading ? (<FastLoadingIndicator/>) : (
        <>
         
            <View style={styled.container}>
              <View style={styled.Box_1}>
                <View style={styled.container__title}>
                  <Text style={styled.title}> Lắng nghe tình trạng cơ thể </Text>
                </View>
                <View style={styled.container__Button}>
                  {Information.map((Item) => (
                    <FloatingButton
                      key={Item.id}
                      onPress={() => navigation.navigate(Item.navigation)}
                      style={[styled.btn, styled.btn__Bmi]}
                    >
                      <Image source={Item.image} style={[styled.image, styled.image__btn]} />
                      <Text style={styled.text__btn}>{Item.content}</Text>
                    </FloatingButton>
                  ))}
                </View>
              </View>
            </View>
             
            {data && (
              <View style={{minHeight: 1500}}>  
                <InfoMenuChoose data={data}/>
              </View>
            )}
           
         

          {/* <View style={{ marginTop: 20 }}>
            <Footer />
          </View> */}
        </>
      )}
    </View>
    </ScrollView>
  );
}

export default MenuChoose;
