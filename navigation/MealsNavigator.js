import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavouritesScreen";
// import FiltersScreen from "../screens/FiltersScreen";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const DefaultStackNav = {
    headerTitle: "A Screen",
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primaryColor : "white",
    },

    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
  MealsNavigator = createStackNavigator(
    {
      Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
          headerTitle: "Meal Categories",
        },
      },
      CategoryMeals: {
        screen: CategoryMealsScreen,
      },
      MealDetail: MealDetailScreen,
    },
    {
      // mode: "modal",
      // initialRouteName:'CategoryMeals',
      defaultNavigationOptions: DefaultStackNav,
    }
  );

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // mode: "modal",
    // initialRouteName:'CategoryMeals',
    defaultNavigationOptions: DefaultStackNav,
  }
);

const tabScreenConfig = {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarIconStyle: { color: Colors.accentColor, Size: 40 },
        tabBarColor: Colors.primaryColor,
        
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        // tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.accentColor,
      },
    },
  },
  MealsFavNavigator =
    Platform.OS === "android"
      ? createMaterialBottomTabNavigator(tabScreenConfig, {
          activeTintColor: "white",
          shifting: true,
          barStyle: {
            backgroundColor: Colors.primaryColor,
          },
        })
      : createBottomTabNavigator(tabScreenConfig, {
          tabBarOptions: {
            activeTintColor: Colors.accentColor,
          },
        });
// const FiltersNavigator = createStackNavigator({
//   Filters: FiltersScreen,
// });

// const MainNavigator = createDrawerNavigator({MealsFavs: MealsFavNavigator,
// Filters: FiltersNavigator});

export default createAppContainer(MealsFavNavigator);
