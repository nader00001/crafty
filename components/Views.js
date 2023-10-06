import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import reviews from "../reviews.json";
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';

import ViewsMore from '../screens/ViewsMore';

const Views = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = React.useRef(null);

  const handleSeeMore = () => {
    bottomSheetModalRef.current?.present();
  };

  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContainer}>
      <ScrollView>
        <ViewsMore />
      </ScrollView>
    </View>
  );

  return (
    <BottomSheetModalProvider>
      <ScrollView style={styles.container}>
        <FlatList
          data={reviews}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.itemContainer}>
                <Text style={{ color: '#023e8a', fontSize: 15 }}>
                  <Icon name="star" size={10} color="yellow" />
                  <Icon name="star" size={10} color="yellow" />
                  <Icon name="star" size={10} color="yellow" />
                  <Icon name="star" size={10} color="yellow" />
                </Text>
                <TouchableOpacity>
                  <Text style={styles.image}>{item.Description}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <TouchableOpacity onPress={handleSeeMore} style={styles.seeMoreButton}>
          <Text style={styles.seeMoreButtonText}>View more reviews</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1} // Définissez l'index à 1 pour afficher ViewsMore en haut
        snapPoints={['50%', '90%']}
        enablePanDownToClose={true}
      >
        {renderBottomSheetContent()}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    elevation: 2,
    borderRadius: 5,
  },
  flatList: {
    backgroundColor: 'white',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  seeMoreButton: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  seeMoreButtonText: {
    color: 'gray',
    fontSize: 16,
  },
  bottomSheetContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default Views;
