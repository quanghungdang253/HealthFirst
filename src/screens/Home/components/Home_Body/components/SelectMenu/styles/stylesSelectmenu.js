import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
          // ==============================style chung======================================
          icon: {
            fontSize: 40
     },
     Button: {
        width: 150,
        height:150,
        paddingVertical:30,
        paddingHorizonta:20,
        backgroundColor: '#33FFFF',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderRadius:10,
        
                 
     },      
     Text: {
         fontWeight:800,
         textAlign:'center'

     },
//================================================================================
container: {
    backgroundColor:'#CCCCCC',
    width:'100%',
    height:350,

},
ImageBackground: {
     width:'100%',
     height:'100%'
},      
image: {
fontSize:20
},
Selectmenu: {
     flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    gap: 15,
    marginLeft:20,
    marginTop:15
        
}


})


export default styled;