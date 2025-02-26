

import { StyleSheet } from 'react-native';

const styled = StyleSheet.create({
    // =========================phần style chung =============================
text: {
        color: 'white',
        zIndex:0
},
input: {
        borderColor: 'black',
        borderBottomColor: 'black',
        borderWidth: 1
},
    //======================================================================
container: {            
    backgroundColor:'white',
    flex: 1, // giúp màn hình chiếm toàn bộ không gian 
   
},
image__bmi: {
    height: '100%',
     width: '100%',    
     zIndex: -1    
},
            
boxTitle1: {
    position: 'relative', 
    height: 90,
    justifyContent:'center',
    alignItems:'center',
   
 }, 
 textTitle: {
    zIndex: 1,
    color:'white',
    fontSize: 20,
    fontWeight:800
     
 },
before:{
    position:'absolute', // 
    backgroundColor:`rgba(28, 138, 214, 0.7)`,
    height:'100%',
     width:'100%',
        
 } ,

 //====================================MAIN CONTENT ================================================
 mainContent: {
   
 },
 boxTitle2: {
            height:100,
            justifyContent:'center'
 },
 textTitle1: {
        color:"#1D93E3",
        fontSize: 20,
 },
Footer: {
     position: 'absolute',
    bottom: 0
                
}

})
export default styled;
