import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Animated, LayoutAnimation } from 'react-native';
import styles from '../styles/inforMenuChooseStyle';
import Icon from "react-native-vector-icons/FontAwesome"; 

function InfoMenuChoose({ data }) {
  const [selectedId, setSelectedId] = useState(null);
  const dropdownAnim = useRef(new Animated.Value(0)).current;

  const toggleDropdown = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);  // Mượt mà hơn khi thay đổi layout
    const isOpen = selectedId === id ? null : id;
    setSelectedId(isOpen);
    Animated.timing(dropdownAnim, {
      toValue: isOpen !== null ? 1 : 0,
      duration: 300,  // Tăng tốc độ thay đổi
      useNativeDriver: false,
    }).start();
  };

  useLayoutEffect(() => {
    if (selectedId !== null) {
      // Đồng bộ hóa trước khi render để tránh giật
      dropdownAnim.setValue(1); 
    }
  }, [selectedId]);

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.Text}>
        {typeof item === "string" ? (index + item) : JSON.stringify(item)}
      </Text>
    </View>
  );

  return (
    <View style={styles.boxContainer}>
      <View style={styles.advertisement}> 
        <View style={styles.boxImage}> 
          <View style={styles.boxAds}>   
            <Image source={require('../image/ads-image.png')} style={styles.imgAds} />
            <Text style={styles.textAds}> Quảng Cáo </Text>
          </View>
          <Image source={require('../image/cham-soc-suc-khoe.jpg')} style={styles.serviceImage} />
        </View>
      </View>

      <View style={styles.Row_1}>
        <View style={styles.Row1__icon}>
          <Image 
            source={require('../image/heart.jpg')}
            style={[styles.image, styles.iconHeart]}
          />
          <Text style={styles.title_box_1}>Lắng nghe sức khỏe</Text>
        </View>
        <Text style={styles.Row1__title}>{data.title}</Text>
      <View style={styles.content}> 
        {data.listContent.map((item) => (
          <View key={item.id}>
            <TouchableOpacity onPress={() => toggleDropdown(item.id)} style={styles.btn}>
                <Text style={styles.categoryTitle}>{item.title}</Text>
                <Icon name="chevron-down" size={12} color="black" />
            </TouchableOpacity>

            <Animated.View
              style={[
                styles.dropdown,
                {
                  height: dropdownAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1000],  // Đảm bảo chiều cao thay đổi mượt mà
                  }),
                  overflow: 'hidden',  // Giúp tránh việc phần tử tràn ra ngoài
                },
              ]}
            >
              {selectedId === item.id && (
                <FlatList
                      style={[styles.boxText, { flexGrow: 1 }]}
                      nestedScrollEnabled={true}
                      removeClippedSubviews={true}  // Tối ưu hiệu suất
                      scrollEnabled={false}
                      data={item.content}
                      keyExtractor={(content, index) => index.toString()}
                      renderItem={renderItem}
                />
              )}
            </Animated.View>
          </View>
        ))}
        </View>
      </View>
    </View>
  );
}

export default InfoMenuChoose;
