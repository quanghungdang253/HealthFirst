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




import { StatusBar } from 'expo-status-bar';

// import Route from './screens/routes/Route';
import Route from './screens/routes/Route';
import HomeScreen from './screens/Home/HomeScreen';
import Search from './screens/Home/components/Home_Header/components/Search';
import Footer from './Common/Footer/Footer';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

import React from 'react';
export default function App({navigation}) {

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
    alignItems: 'center', // canh giữa theo chiều ngang
  },
});

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';

// const Stack = createStackNavigator();

// // Component ở cấp sâu
// const ChildButton = () => {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Go to Details"
//       onPress={() => navigation.navigate('Details')}
//     />
//   );
// };

// // Component cấp trung gian
// const NestedComponent = () => {
//   return (
//     <View>
//       <Text>This is a nested component</Text>
    
//     </View>
//   );
// };

// // Màn hình chính
// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <NestedComponent />
//       <ChildButton /> {/* Không cần truyền navigation */}
//     </View>
//   );
// };

// // Màn hình chi tiết
// const DetailsScreen = () => (
//   <View>
//     <Text>Details Screen</Text>
//   </View>
// );

// // App chính
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
