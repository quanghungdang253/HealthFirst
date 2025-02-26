// import React, { useEffect } from 'react';
// import { StyleSheet } from 'react-native';
// import { Text,View } from 'react-native';
// import Main_Header from './components/Home_Header/Main_Header';
// import { TextInput } from 'react-native';
// import Main_Body from './components/Home_Body/Main_Body';



// function HomeScreen(props) {
   
     

//     return (
//             <View style={style.container}>
//                        <Main_Header/>
//                        <Main_Body/>
                        
//             </View>
//     );
// }

// const style = StyleSheet.create({
//     container: {
//                     flex: 1,
                   
                  
//     }
// })
// export default HomeScreen;

import React, { Component } from 'react';
import { View, StyleSheet, Button, Text,ScrollView  } from 'react-native';
import Main_Header from './components/Home_Header/Main_Header';
import Main_Body from './components/Home_Body/Main_Body';
import Tabchoose from './components/Home_Body/components/Tabchoose/Tabchoose';
import Selectmenu from './components/Home_Body/components/SelectMenu/Selectmenu';
import Footer from '../../Common/Footer/Footer';
import { useNavigation } from '@react-navigation/native';
import Sliceimage from './components/Home_Body/components/SliceImage/Sliceimage';
function HomeScreen({ navigation }) { // nhận navigation từ props
    const navigation1 = useNavigation();
    return (
       
        <View style={style.container}>
         <ScrollView style={style.ScrollView}> 
            <View style={style.Component}>
                        <Tabchoose navigation={navigation}/>
                        <Selectmenu navigation={navigation}/>
                        <Sliceimage/>
             </View>
            </ScrollView>
                <View  style={style.FooterContainer}>
                        <Footer navigation={navigation}/>
               </View>
        </View>
       
    );
}

const style = StyleSheet.create({
    
    container: {
                 flex:1,
                 height:10000
                    
    },
    ScrollView: {
            flex:1,
            height:1000
    },
    Component: {
        flex:1,
        flexDirection:'column',
        
    },
    Selectmenu: {
        marginTop: 100
    },
    FooterContainer: {
                position:'absolute',
                zIndex:1,
                bottom:0,
                left:0,
                right:0,
                justifyContent:'center',
                alignItems:'center',
                height:40,
                paddingBottom:55
               
      },
     
});

export default HomeScreen;



// import React from 'react';
// import { View, StyleSheet, ScrollView, Text } from 'react-native';
// import Tabchoose from './components/Home_Body/components/Tabchoose/Tabchoose';
// import Selectmenu from './components/Home_Body/components/SelectMenu/Selectmenu';
// import Footer from '../../Common/Footer/Footer';
// import Sliceimage from './components/Home_Body/components/SliceImage/Sliceimage';

// function HomeScreen({ navigation }) {
//     return (
//         <View style={styles.container}>
//             {/* Nội dung có thể cuộn */}
//             <ScrollView style={styles.scrollContainer}>
//                 <View style={styles.content}>
//                     <Tabchoose navigation={navigation} />
//                     <Selectmenu navigation={navigation} />
//                     <Sliceimage />
//                 </View>
//             </ScrollView>

//             {/* Footer cố định */}
//             <View style={styles.footer}>
//                 <Footer navigation={navigation} />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height:1000
       
//     },
//     scrollContainer: {
//         flex: 1,
//         height:1000
//     },
//     content: {
//         paddingBottom: 100, // Tạo khoảng trống để không bị footer che
       
//     },
//     footer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: '#fff',
//         height: 60, // Chiều cao của footer
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderTopWidth: 1,
//         borderTopColor: '#ccc',
//     },
// });

// export default HomeScreen;
