
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
boxContainer: {
    flex: 1


        
},
//=================style chung =====================
btn: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        columnGap:10,
        height:30,
        backgroundColor:'#DDDDDD'
},
Text: {
    padding: 10
},

//===============================================
advertisement: {
        marginBottom:30
},
boxImage: {
        width: '100%',
        height:220,
        padding: 10,
        position:'relative',
        
},
serviceImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        objectFit:'contain',
        marginTop:5
},
boxAds: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
 
    paddingLeft: 10,
    zIndex:1
},
imgAds: {
    maxHeight: 12,
    maxWidth: 12,
    objectFit:'contain'
},
textAds: {
    fontSize: 10
},

iconHeart: {
    width: 120,
    height: 80,
    borderRadius: 999,
    objectFit:'fill',

    }, 
Row1__icon: {
    position:'relative',
        
        borderRadius:100,
        paddingLeft: 100,
        paddingTop: 10, 
        paddingBottom: 10, 
    },
    title_box_1: {
      marginRight: 110,
        marginTop: 40,
        fontSize: 18,
        fontWeight: 800,
        fontFamily: "Lato",
        textAlign:'center'
    },
    Row_1: {
        position:'relative',
      
    
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'white',
        padding:10,
    },
    Row1__title: {
        fontSize: 17,
        fontWeight: 600
    
    },
    boxText: {
           
    },
  content : {
        flex: 1,
        rowGap:10
  } 
    
})




export default styles;