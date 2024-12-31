

import { StyleSheet } from "react-native";


const styled = StyleSheet.create({
    // ========================style chung ===================
     


    containe: {
        position: 'absolute',
        zIndex:1
    },
    //========================================================
    Button: {
                width:73,
                alignItems:'center'
        },
    container: {
                backgroundColor:"#FFFFFF",
                height: 70         
             },   
    iconHome: {
                fontSize: 25,      
            },
    container__navigation: {
                        flexDirection: 'row',
            
                        marginTop:10,
                        height : '100%'
                
            }
})

export default styled;