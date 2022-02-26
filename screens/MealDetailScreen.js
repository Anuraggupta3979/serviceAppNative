import React, { useCallback } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listitem}>
      <Text>{props.children}</Text>
    </View>
  );
};
const MealDetailScreen = ({ route, navigation }) => {
  // const mealId = props.navigation.getParam("mealId");
  const dispatch = useDispatch();
  const { mealId } = route.params;
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealIsFAv = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedmeal = availableMeals.find((meal) => meal.id === mealId);
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);
  navigation.setOptions({
    title: selectedmeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Ionicons
          name={mealIsFAv ? "ios-star" : "ios-star-outline"}
          size={25}
          color={Colors.accentColor}
          onPress={toggleFavouriteHandler}
        />
      </HeaderButtons>
    ),
  });
  return (
    <ScrollView>
      <Image source={{ uri: selectedmeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedmeal.duration}m</Text>
        <Text>{selectedmeal.complexity.toUpperCase()}</Text>
        <Text>{selectedmeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.texttitle}>Ingredients</Text>
      {selectedmeal.ingredients.map((ing) => (
        <ListItem key={ing}>{ing}</ListItem>
      ))}
      <Text style={styles.texttitle}>Steps</Text>
      {selectedmeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  texttitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  listitem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailScreen;
