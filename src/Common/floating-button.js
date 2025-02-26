import React from 'react';
import { useRef } from 'react';
import { Animated, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
function FloatingButton({children , style, Floatheight = 0.6, onPress}) {
    const preAnimatedValue = useRef(new Animated.Value(1)).current;
    const handlePressIn = () => {
                Animated.spring(preAnimatedValue, {
                    toValue: Floatheight,
                    useNativeDriver: true,
                }).start();
    }
    const handlePressOut = () => {
                Animated.spring(preAnimatedValue, {
                    toValue: 1,
                    useNativeDriver: true
                }).start();
    }
    return (
        <TouchableWithoutFeedback  
                            onPress={onPress} 
                            onPressIn={handlePressIn} 
                            onPressOut={handlePressOut}>
                 <Animated.View style={[styles.box, style,{transform: [{scale: preAnimatedValue}]} ]}>
                                 {children}
                </Animated.View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    box: {
      width: 150,
      height: 100,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default FloatingButton;