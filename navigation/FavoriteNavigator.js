import React from "react";

import FavouritesScreen from "../screens/FavouritesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "../screens/MealDetailScreen";
const Stack = createNativeStackNavigator();
const FavoriteNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};
export { FavoriteNavigator };
