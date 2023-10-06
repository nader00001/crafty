import Fresh from "../components/Home/Fresh";
import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Karousel from "../components/Home/Carousel";
import Recent from "../components/Home/Recent";
import Articles from "../components/Home/Articles";
import HorizontalImageList from "./OtherProduct";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Karousel />
        <Fresh />
        <Recent />
        <View style={styles.spacer}></View>
        <Articles />
        <View style={styles.spacer}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  spacer: {
    height: 20, // Ajustez la hauteur selon vos besoins
  },
});

export default Home;
