import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigator } from "./StackNavigator";
import { FavoriteNavigator } from "./FavoriteNavigator";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        // style: { ...styles.nav },
        tintColor: Colors.primaryColor,
        activeTintColor: Colors.accentColor,
        backgroundColor: Colors.primaryColor,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      }}
    >
      <Tab.Screen
        name="Meals"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={focused ? Colors.accentColor : Colors.primaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-star"
              size={25}
              color={focused ? Colors.accentColor : Colors.primaryColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    bottom: -65,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: Colors.primaryColor,
    borderRadius: 15,
    height: 90,
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default BottomTabNavigator;
