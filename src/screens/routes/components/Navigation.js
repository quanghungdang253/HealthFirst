import React, { Component } from 'react';
import { View,Button, Imag, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import Search from '../../Home/components/Home_Header/components/Search';
import { TextInput } from 'react-native';
import HomeScreen from '../../Home/HomeScreen';

import Main_Body from '../../Home/components/Home_Body/Main_Body';
import Check_index from '../../Home/components/Home_Body/components/Tabchoose/components/Check_index';

        const Pages = [
            {
                id: 1,
                name: "Home",
                component: HomeScreen, 
                options:{
                title: "Wellcome",            
                headerStyle:{
                    backgroundColor:'orange'
                     },
                     headerRight: () => (
                            <View style={styled.Title}>
                                 <Text style={styled.Texttitle}> Health First </Text>
                            </View>
                      )                  
            } 
        },
        {
            id: 2,
            name: "Check_index",
            component: Check_index, 
            options:{
            title: "Checkindex",
            headerStyle:{
                backgroundColor:'orange'
                 },
               
                    } 
             }
    
            
        ]
    //     const Home = {
    //             name: "Home",
    //             component: HomeScreen, 
    //             options:{
    //             title: "Wellcome",
              
    //             headerStyle:{
    //                 backgroundColor:'orange'
    //                  },
    //                  headerRight: () => (
    //                         <View style={styled.Title}>
    //                              <Text style={styled.Texttitle}> Check Heath </Text>
    //                         </View>
    //                   )
                      
            
    //         } 
    //     }
    //     const Check_indexs = {
    //         name: "Check_index",
    //         component: Check_index, 
    //         options:{
    //         title: "Checkindex",
          
    //         headerStyle:{
    //             backgroundColor:'orange'
    //              },
    //              headerRight: () => (
    //                     <View style={styled.Title}>
    //                          <Text style={styled.Texttitle}> Check Heath </Text>
    //                     </View>
    //               )
                  
        
    //     } 
    // }
        
    
   

const styled = StyleSheet.create({
    Text: {
            width:100,
            height:30
    },
    Texttitle: {
                    fontSize: 20,
                    backgroundColor: 'yellow',
                    padding: 10,
                    fontWeight: 600,
                    fontFamily:   "Oswald",
                    borderTopLeftRadius: 20,
                    
                
    }
})

export { Pages };