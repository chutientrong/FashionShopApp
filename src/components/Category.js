import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryComponents/CategoryCard";

const Category = ({ data }) => {
  // console.log("category = ",data);
  return (
    <View style={{ marginTop: 12, height: 108 }}>
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <View key={index}>
            <CategoryCard
              image={item.image}
              title={item.title}
              onPress={() => console.log(item.title)}
            ></CategoryCard>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;
