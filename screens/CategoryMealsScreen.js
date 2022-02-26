import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const CategoryMealsScreen = ({ route, navigation }) => {
  // const categoryId = props.navigation.getParam("categoryId");

  const { categoryId } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const selecetedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  navigation.setOptions({ title: selecetedCategory.title });
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoeyIds.indexOf(categoryId) >= 0
  );
  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.nofound}>
        <Text>No meals found, maybe check your filters?</Text>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={navigation} />;
};
// CategoryMealsScreen.navigationOptions = (navigationData) => {
//   // console.log(navigationData);

//   const categoryId = navigationData.navigation.getParam("categoryId");
//   const selecetedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
//   return {
//     headerTitle: selecetedCategory.title,
//   };
// };
const styles = StyleSheet.create({
  nofound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
