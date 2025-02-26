import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Home/HomeScreen';
import {Pages} from './components/Navigation';
import Main_Body from '../Home/components/Home_Body/Main_Body';
import Footer from '../../Common/Footer/Footer';
import App from '../../App';
import Sliceimage from '../Home/components/Home_Body/components/SliceImage/Sliceimage';
// áp dụng cho useNavigation
import { createStackNavigator } from '@react-navigation/stack';




function Route(props) {
    const Stack = createNativeStackNavigator();   // tạo đối tượng điều hướng 
    const Stack1 = createStackNavigator();
   
    return (
     <> 
        <NavigationContainer>  
            <Stack.Navigator  initialRouteName='Home'> 
                <Stack.Group>   
         {Pages.map((pages) => (
                        <Stack.Screen 
                            key={pages.id}
                            name={pages.name} 
                            component={pages.component}
                            options={pages.options}
                        />
            ))}
                 </Stack.Group>
             </Stack.Navigator>        
        </NavigationContainer>  
        </>
    );
}
export default Route;








