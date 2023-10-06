import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import FeatherIcon from 'react-native-vector-icons/Feather';

import starImage from '../assets/etoile.jpg';
import likeImage from '../assets/like.jpg';

const data = [
  { id: '1', imageUri: 'https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg', productName: 'Produit 1', stars: 4, price: 19.99, likes: 0 },
  { id: '2', imageUri: 'https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg', productName: 'Produit 2', stars: 3, price: 24.99, likes: 0 },
  { id: '3', imageUri: 'https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg', productName: 'Produit 3', stars: 5, price: 14.99, likes: 0 },
  { id: '4', imageUri: 'https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg', productName: 'Produit 3', stars: 5, price: 14.99, likes: 0 },
  { id: '5', imageUri: 'https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg', productName: 'Produit 3', stars: 5, price: 14.99, likes: 0 },
];

const HorizontalImageList = () => {
  const [productData, setProductData] = useState(data);

  const renderStars = (stars) => {
    const starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(<Image source={starImage} style={styles.star} key={i} />);
    }
    return starArray;
  };

  function nombreItem(){
    s=0;
    for(k in data){
      s+=1;
      
    }
    return s;
  }

  const handleLike = (productId) => {
    setProductData((prevData) => {
      return prevData.map((item) => {
        if (item.id === productId) {
          return { ...item, likes: item.likes + 1 };
        }
        return item;
      });
    });
  };

  return (
    <View>
     <Text style={styles.nombreItem}>{nombreItem() } items</Text>
    <FlatList
      data={productData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer} key={item.id}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <FeatherIcon
  name="heart"
  size={20}
  color={ "red" }
/>


          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.starsContainer}>
          <Text style={styles.etoile}>
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="white" />

            </Text>
          
          </Text>
          <View style={styles.likeContainer}>
            {/* <Text style={styles.likes}>{item.likes}</Text>
            <TouchableOpacity onPress={() => handleLike(item.id)}>
              <Image source={likeImage} style={styles.likeButton} />
            </TouchableOpacity> */}
          </View>
        </View>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
    marginRight: 2
  },
  nombreItem :{
    textAlign : 'right' ,
    marginRight:10
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: -15,
    
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  starsContainer: {
    flexDirection: 'row',
    color: 'yellow',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  likes: {
    fontSize: 14,
    marginRight: 5,
  },
  likeButton: {
    width: 20,
    height: 20,
  },
});

export default HorizontalImageList;
