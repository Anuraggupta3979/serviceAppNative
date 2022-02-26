// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import FiltersScreen from "../screens/FiltersScreen";
import { FilterNavigator } from "./FilterNavigator";
import FavouritesScreen from "../screens/FavouritesScreen";
import BottomTabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Filters" component={FilterNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
