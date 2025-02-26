// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './screens/Home/HomeScreen';
// import Route from './screens/routes/Route';
// export default function App() {
//   return (
//     <View style={styles.container}>
//                <Route/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
    
//   },
// });

//================================================


import { StatusBar } from 'expo-status-bar';

// import Route from './screens/routes/Route';
import Route from './screens/routes/Route';
import HomeScreen from './screens/Home/HomeScreen';
import Search from './screens/Home/components/Home_Header/components/Search';
import Footer from './Common/Footer/Footer';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import useHandleGetDataShow from './hook/useHandleGetDataShow';
import React, { useEffect } from 'react';

export default function App({navigation}) {
useEffect(() => {
      
},[])
  return (
         <>  
               <Route/>
              
              
         </>
  );
}
const styled = StyleSheet.create({
  container: {
    flex: 1, // đảm bảo View chiếm toàn bộ không gian màn hình
    justifyContent: 'center', // canh giữa nội dung theo chiều dọc
    alignItems: 'center' // canh giữa theo chiều ngang
    
  },
});
// ================================================================
// import React, { useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

// const App = () => {
//   const [close, setClose] = useState(true);
//   const [fadeAnim] = useState(new Animated.Value(1)); // Ẩn hiện với animation

//   const categories = [
  

// { id: 0, name: "Danh mục 1", products: ["Sản phẩm 1", "Sản phẩm 2", "Sản phẩm 3", "Sản phẩm 4", "Sản phẩm 5", "Sản phẩm 6", "Sản phẩm 7", "Sản phẩm 8", "Sản phẩm 9", "Sản phẩm 10"] },
// { id: 1, name: "Danh mục 2", products: ["Sản phẩm A", "Sản phẩm B", "Sản phẩm C", "Sản phẩm D", "Sản phẩm E", "Sản phẩm F", "Sản phẩm G", "Sản phẩm H", "Sản phẩm I", "Sản phẩm J"] },
// { id: 2, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 3, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 4, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 5, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 6, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id:7, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 8, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 8, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 9, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 10, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 11, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },
// { id: 12, name: "Danh mục 3", products: ["Sản phẩm X", "Sản phẩm Y", "Sản phẩm Z", "Sản phẩm P", "Sản phẩm Q", "Sản phẩm R", "Sản phẩm S", "Sản phẩm T", "Sản phẩm U", "Sản phẩm V"] },



//   ];

//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const toggleProducts = () => {
//     if (close) {
//       setClose(false);
//       Animated.timing(fadeAnim, {
//         toValue: 0, // Ẩn sản phẩm
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       setClose(true);
//       Animated.timing(fadeAnim, {
//         toValue: 1, // Hiện sản phẩm
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Chọn Danh Mục</Text>

//       {/* Danh sách danh mục */}
//       <ScrollView showsHorizontalScrollIndicator={false}>
//         {categories.map(category => (
//           <TouchableOpacity
//             key={category.id}
//             style={styles.categoryButton}
//             onPress={() => {
//               setSelectedCategory(category);
//               setClose(true);
//             }}
//           >
//             <Text style={styles.categoryText}>{category.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Sản phẩm của danh mục đã chọn */}
//       {selectedCategory && (
//         <View style={styles.productsContainer}>
//           <TouchableOpacity style={styles.closeButton} onPress={toggleProducts}>
//             <Text>{close ? "Mở" : "Đóng"}</Text>
//           </TouchableOpacity>

//           {/* Animated View để điều khiển sự ẩn hiện của sản phẩm */}
//           <Animated.View style={{ opacity: fadeAnim }}>
//             {close && (
//               <Text style={styles.productHeader}>Sản phẩm trong {selectedCategory.name}:</Text>
//             )}
//             {selectedCategory.products.map((product, index) => (
//               <View key={index} style={styles.product}>
//                 <Text style={styles.productText}>{product}</Text>
//               </View>
//             ))}
//           </Animated.View>
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   categoryButton: {
//     padding: 10,
//     backgroundColor: '#4CAF50',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   categoryText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   productsContainer: {
//     marginTop: 20,
//   },
//   closeButton: {
//     padding: 10,
//     backgroundColor: '#FF5722',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   productHeader: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   product: {
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   productText: {
//     fontSize: 16,
//   },
// });

// export default App;


//====================================================================

//==========================
// // import React from 'react';
// // import { View, Text, Button } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { useNavigation } from '@react-navigation/native';

// // const Stack = createStackNavigator();

// // // Component ở cấp sâu
// // const ChildButton = () => {
// //   const navigation = useNavigation();

// //   return (
// //     <Button
// //       title="Go to Details"
// //       onPress={() => navigation.navigate('Details')}
// //     />
// //   );
// // };

// // // Component cấp trung gian
// // const NestedComponent = () => {
// //   return (
// //     <View>
// //       <Text>This is a nested component</Text>
    
// //     </View>
// //   );
// // };

// // // Màn hình chính
// // const HomeScreen = () => {
// //   return (
// //     <View>
// //       <Text>Home Screen</Text>
// //       <NestedComponent />
// //       <ChildButton /> {/* Không cần truyền navigation */}
// //     </View>
// //   );
// // };

// // // Màn hình chi tiết
// // const DetailsScreen = () => (
// //   <View>
// //     <Text>Details Screen</Text>
// //   </View>
// // );

// // // App chính
// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="Details" component={DetailsScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;

// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const DatePickerExample = () => {
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     setShow(false); // Ẩn DatePicker khi chọn xong
//     if (selectedDate) {
//       setDate(selectedDate);
//     }
//   };

//   // Định dạng ngày đầy đủ: Thứ, ngày/tháng/năm
//   const formatDate = (date) => {
//     return new Intl.DateTimeFormat('vi-VN', {
//       weekday: 'long',  // Hiển thị thứ (Thứ Hai, Thứ Ba,...)
//       day: '2-digit',    // Hiển thị ngày 2 chữ số
//       month: '2-digit',  // Hiển thị tháng 2 chữ số
//       year: 'numeric'    // Hiển thị năm đầy đủ
//     }).format(date);
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Button title="Chọn ngày" onPress={() => setShow(true)} />
//       {show && (
//         <DateTimePicker value={date} mode="date" display="default" onChange={onChange} />
//       )}
//       <Text style={{ marginTop: 10 }}>Ngày đã chọn: {formatDate(date)}</Text>
//     </View>
//   );
// };

// export default DatePickerExample;

// ====================================định dạng ngày tháng năm==================================================
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const DatePickerExample = () => {
//   const [selectedDay, setSelectedDay] = useState(new Date().getDate());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   // Tạo danh sách tháng (1 - 12)
//   const months = Array.from({ length: 12 }, (_, i) => i + 1);

//   // Tạo danh sách năm (1900 - năm hiện tại)
//   const years = Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => 1900 + i);

//   // Hiển thị lịch chọn ngày
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   // Ẩn lịch
//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   // Xử lý khi chọn ngày từ lịch
//   const handleConfirm = (date) => {
//     setSelectedDay(date.getDate());
//     setSelectedMonth(date.getMonth() + 1);
//     setSelectedYear(date.getFullYear());
//     hideDatePicker();
//   };

//   // Chuyển ngày đã chọn thành chuỗi theo định dạng dd/mm/yyyy
//   const formatDate = () => {
//     return `${selectedDay < 10 ? '0' : ''}${selectedDay}/${selectedMonth < 10 ? '0' : ''}${selectedMonth}/${selectedYear}`;
//   };

//   // Xóa ngày đã chọn
//   const clearDate = () => {
//     setSelectedDay(null);
//     setSelectedMonth(null);
//     setSelectedYear(null);
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       {/* Chọn tháng */}
//       <Text>Chọn tháng:</Text>
//       <Picker selectedValue={selectedMonth} onValueChange={(itemValue) => setSelectedMonth(itemValue)}>
//         {months.map((month) => (
//           <Picker.Item key={month} label={`Tháng ${month}`} value={month} />
//         ))}
//       </Picker>

//       {/* Chọn năm */}
//       <Text>Chọn năm:</Text>
//       <Picker selectedValue={selectedYear} onValueChange={(itemValue) => setSelectedYear(itemValue)}>
//         {years.map((year) => (
//           <Picker.Item key={year} label={year.toString()} value={year} />
//         ))}
//       </Picker>

//       {/* Chọn ngày bằng ô input */}
//       <Text>Chọn ngày:</Text>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <TextInput
//           style={{ borderWidth: 1, padding: 10, marginTop: 10, fontSize: 16, flex: 1 }}
//           value={selectedDay && selectedMonth && selectedYear ? formatDate() : ''} // Hiển thị ngày đã chọn hoặc ô trống
//           onPress={() => showDatePicker()} // Khi nhấn vào ô input, hiển thị lịch mà không cần kiểm tra focus
//           editable={true} // Không cho phép người dùng nhập trực tiếp vào ô input, chỉ hiển thị ngày
//         />
//         {/* Nút xóa */}
//         <TouchableOpacity onPress={clearDate} style={{ marginLeft: 10 }}>
//           <Text style={{ fontSize: 16, color: 'red' }}>Xóa</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Lịch chọn ngày */}
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//         date={new Date(selectedYear, selectedMonth - 1, selectedDay)} // Gán giá trị ngày đã chọn
//       />

//       {/* Hiển thị ngày đã chọn */}
//       <Text style={{ marginTop: 10 }}>
//         Ngày đã chọn: {selectedDay && selectedMonth && selectedYear ? formatDate() : 'Chưa chọn'}
//       </Text>
//     </View>
//   );
// };

// export default DatePickerExample;
