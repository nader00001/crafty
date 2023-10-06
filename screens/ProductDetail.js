import React from "react";
import { Text, ScrollView, View, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Karousel from "../components/Home/Carousel";
import Svg, { Path } from "react-native-svg";
import Accordion from "../components/Accordion";
import HorizontalImageList from "./OtherProduct";
import Views from "../components/Views";

const ProductDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Karousel />
        <TouchableOpacity
          style={{
            height: 50,
            width: Dimensions.get("window").width - 20,
            marginTop: 10,
            marginLeft: 10,
            borderRadius: 10,
            borderColor: "#ccc",
            borderWidth: 1,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <Svg
            style={{
              transform: "rotate(45deg)",
              width: 20,
              height: 20,
              position: "absolute",
              marginLeft: Dimensions.get("window").width - 70,
              marginTop: 15,
            }}
            viewBox="0 0 32 32"
          >
            <Path
              class="cls-1"
              d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z"
              fill="#101820"
            />
          </Svg>
          <Text style={{ marginLeft: 30 }}>Message seller</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>A&C</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: Dimensions.get("window").width - 160,
            }}
          >
            $ 17.14
          </Text>
        </View>
        <Text style={{ marginLeft: 10, fontSize: 12, color: "#ccc" }}>
          Item Name
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 12, color: "yellow" }}>
          * * * *
        </Text>
        
        {/* Inclure Accordion ici */}
        <Accordion />

        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
          You can also like
        </Text>
        <HorizontalImageList />
        <Views />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
