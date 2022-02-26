import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";
const FavouritesScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);
  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={styles.nofound}>
        <Text>No favorite meals found. Start adding some..</Text>
      </View>
    );
  }
  return <MealList listData={availableMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            // navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  nofound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
});
export default FavouritesScreen;
