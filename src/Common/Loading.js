import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const FastLoadingIndicator = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
            const startAnimation = () => {
                spinValue.setValue(0); // Đặt lại giá trị về 0 trước khi quay tiếp
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 300, // Tốc độ quay (giảm xuống để quay nhanh hơn)
                    easing: Easing.linear, 
                    useNativeDriver: true,
                }).start(() => startAnimation()); 
            };

        startAnimation();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'], // Quay đúng 360 độ
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.loader, { transform: [{ rotate: spin }] }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    loader: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderRadius: 999,
        borderTopColor: 'red', // Chỉ định màu trắng cho một phần của vòng tròn
        borderRightColor: 'white',
        borderBottomColor: 'blue',
        borderLeftColor: 'red', // Làm trong suốt phần bên trái để tạo hiệu ứng quay
    },
});

export default FastLoadingIndicator;
