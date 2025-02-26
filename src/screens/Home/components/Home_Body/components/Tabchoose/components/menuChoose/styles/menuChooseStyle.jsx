import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
  // ================phần style chung=========
  btn: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    padding: 10,
    width: 160,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    display: 'block',
  },
  text__btn: {
    fontSize: 13,
    fontFamily: "serif",
    fontWeight: '800',
    textAlign: 'center',
  },
  image__btn: {
    height: 70,
    width: 70,
  },
  ScrollView: {
    
    backgroundColor: 'rgba(108, 180, 244, 0.82)',
    height:'auto'
  },

  // ==================title==============
  container__title: {
    alignItems: 'center',
  },
  title: {
    padding: 10,
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
  },
  container: {
    flexGrow: 1,
 
  },

  Box_1: {
    paddingBottom: 10
    
  },

  iconHeart: {
    fontSize: 40,
    borderRadius: 40,
    maxWidth: 120,
    maxHeight: 80,
    padding: 20,
    backgroundColor: 'white',
    resizeMode: 'contain',  // Tối ưu hình ảnh
  },

  container__Button: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 20,
    rowGap: 10,
    justifyContent: 'center',
  },
  btn__Bmi: {
    backgroundColor: 'white',
  },
  btn__checkHealth: {
    backgroundColor: 'white',
  },

  box__image: {
    height: '100%',
  },

  //==============================================footer===============================================
  Footer: {
  
    
  },
  box_1_icon: {
    borderRadius: 20,
    backgroundColor: 'black',
  },
});

export default styled;
