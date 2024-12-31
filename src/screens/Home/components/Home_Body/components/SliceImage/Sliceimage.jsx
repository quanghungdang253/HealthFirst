import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function SliceImage() {
    // <FontAwesomeIcon icon={faLeft} />
    const preImages = [
        "https://ivie.vn/_next/image?url=https%3A%2F%2Fisofhcare-backup.s3-ap-southeast-1.amazonaws.com%2Fimages%2Fho-minh-tam-tc_7478753a_e724_458c_8e57_59468fdb7e28.jpg&w=640&q=75",
        "https://ivie.vn/_next/image?url=https%3A%2F%2Fisofhcare-backup.s3-ap-southeast-1.amazonaws.com%2Fimages%2Ftran-thi-thanh-nho-tc_9940a515_0a53_4af6_a780_47d0734e535a.jpg&w=640&q=75"
     
       
    ];

    const [preIndex, setIndex] = useState(0);

    // Điều chỉnh chỉ số hình ảnh
    useEffect(() => {
        if (preIndex >= preImages.length) {
            setIndex(0);
        } else if (preIndex < 0) {
            setIndex(preImages.length - 1);
        }
    }, [preIndex, preImages.length]);

    // Tự động chuyển hình ảnh
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
        }, 2000);

        return () => clearInterval(timer);
    }, [preIndex]);

    // Chuyển sang hình ảnh tiếp theo
    const goToNext = () => setIndex((prevIndex) => prevIndex + 1);

    // Quay lại hình ảnh trước đó
    const goToPrevious = () => setIndex((prevIndex) => prevIndex - 1);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}> Ưu đãi hấp dẫn chỉ có tại Health First</Text>
            <Image source={{ uri: preImages[preIndex] }} style={styles.image} />
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.navButton} onPress={goToPrevious}>
                    <Text style={styles.navText}> <FontAwesome name="arrow-left"/>  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={goToNext}>
                    <Text style={styles.navText}> <FontAwesome name="arrow-right"/>  </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "end",
        alignItems: "center",
        position: 'relative'
        
    },
    title: {
                fontWeight:700,
                fontSize:15,
                width:'100%',
                padding:10
    },  
    image: {

        width: 350,
        height: 100,
        resizeMode: "cover",
        borderRadius: 10,
    },
    navigation: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
        width: "95%",
        position: 'absolute',
        top:'45%'
    },
    navButton: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    navText: {
        fontSize: 15,
    },
});

export default SliceImage;
