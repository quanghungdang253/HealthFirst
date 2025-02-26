import React from 'react';
import { ScrollView } from 'react-native';
import MenuChoose from './menuChoose';
import InfoMenuChoose from './infoMenuChoose';

function mainMenu(props) {
    return (
        <ScrollView>
                    <MenuChoose/> 
                    <InfoMenuChoose/>

        </ScrollView>
    );
}

export default mainMenu;