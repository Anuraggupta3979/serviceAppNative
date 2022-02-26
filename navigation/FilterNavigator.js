import React from "react";
import { StackNavigator } from "./StackNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FiltersScreen from "../screens/FiltersScreen";
const Stack = createNativeStackNavigator();
import BottomTabNavigator from "./TabNavigator";
const FilterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
};
export { FilterNavigator };
