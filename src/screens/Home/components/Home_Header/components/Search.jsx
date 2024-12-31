import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
function Search(props) {
    return (
              <View style={styled.formInput}>
                  <FontAwesome name='search' style={styled.icon}/>  
                  <TextInput style={styled.Input}
                                placeholder='Tìm kiếm thông tin tại đây'
                                onFocus={() => console.log('Focused!')} 
                  />
              </View>
    );
}
const styled = StyleSheet.create({
  
        Input: {
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
         // Hoặc giá trị phù hợp hơn với màn hình
         
          fontSize: 15,
          paddingHorizontal: 10, // Tăng khoảng cách giữa chữ và viền
        },
        formInput : {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 70
        
        },
        icon: {
          marginTop: 10,
          fontSize: 15
        }
      
      });
      
export default Search;


// import React from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';

// function CustomHeader() {
//   return (
//     <View style={styles.headerContainer}>
//       <TextInput
//         style={styles.input}
//         placeholder="Tìm kiếm thông tin tại đây"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     height: 100,
//     backgroundColor: 'orange',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 40, // Đảm bảo phần input không bị che khuất
//   },
//   input: {
//     height: 40,
//     width: '90%',
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     fontSize: 18,
//     backgroundColor: 'white',
//   },
// });

// export default CustomHeader;
