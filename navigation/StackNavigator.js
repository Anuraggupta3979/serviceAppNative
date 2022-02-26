import React from "react";
import { Platform, Button } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        // options={{
        //   headerTitle: "Meal Categories",
        //   headerStyle: {
        //     backgroundColor:
        //       Platform.OS === "android" ? Colors.primaryColor : "white",
        //   },
        //   headerTintColor:
        //     Platform.OS === "android" ? "white" : Colors.primaryColor,
        //   headerBackTitle: "white",
        // }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      {/* <Stack.Screen name="Favourites" component={FavouritesScreen} /> */}
    </Stack.Navigator>
  );
};
export { StackNavigator };
