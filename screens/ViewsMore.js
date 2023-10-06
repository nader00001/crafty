import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import reviews from "../ViewMore.json"; 
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ViewMore = () => {
  const [data, setData] = useState(reviews);
  const [likedItems, setLikedItems] = useState({}); 

  const handleLike = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id], 
    }));
  };

  function items(){
    s=0
    for (k in data){
      s+=1;
    }
    return s
  }

  return (
    <View>
      <Text style={styles.reviews}>{items()} reviews</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.imageAndLikeContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../assets/profil.jpg')} style={styles.image} />
            </View>
            <TouchableOpacity onPress={() => handleLike(item.id)}>
              <Text style={styles.date}>{item.date}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nom}>{item.nom}</Text>
          </View>
          <Text style={styles.productName}>{item.productName}</Text>
          <View style={styles.starsContainer}>
            <Text style={styles.etoile}>
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="yellow" />
            <Icon name="star" size={10} color="white" />
            </Text>
          </View>
          <View style={styles.likesContainer}>
            <Text style={styles.likesText}>helpfuls</Text>
            <TouchableOpacity onPress={() => handleLike(item.id)}>
              <Feather
                name="thumbs-up"
                size={20}
                color={likedItems[item.id] ? "green" : "blue"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
    </View>
  );
};


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },

  reviews:{
    fontSize: 15,
    marginLeft: 20,
  },
  etoile: {
    color: 'yellow',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nom: {
    fontSize: 16,
    color: 'black',
    marginLeft: -100,
   
    marginTop: -10
  },
  imageAndLikeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  imageWrapper: {
    width: 35,
    height: 35,
    borderRadius: 20, 
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  date: {
    fontSize: 10,
  },
  productName: {
    fontSize: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  likeButton: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:-230 ,
  },
  likesText: {
    fontSize: 14,
    marginLeft: 5, 
    marginRight:5
  },
});

export default ViewMore;
