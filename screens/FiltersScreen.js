import React, { useState, useCallback } from "react";
import { ScrollView, View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = ({ route, navigation }) => {
  const [isGlutinFree, setIsGlutinFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegitarian, setIsVegitarian] = useState(false);
  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutinFree: isGlutinFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegitarian: isVegitarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutinFree, isLactoseFree, isVegan, isVegitarian, dispatch]);

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Ionicons
          name="ios-save"
          size={25}
          color={Colors.accentColor}
          onPress={saveFilters}
        />
      </HeaderButtons>
    ),
  });
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Glutin-free"
          state={isGlutinFree}
          onChange={(newValue) => setIsGlutinFree(newValue)}
        />
        <FilterSwitch
          label="Lactose-free"
          state={isLactoseFree}
          onChange={(newValue) => setisLactoseFree(newValue)}
        />
        <FilterSwitch
          label="Vegan"
          state={isVegan}
          onChange={(newValue) => setIsVegan(newValue)}
        />
        <FilterSwitch
          label="Vegitarian"
          state={isVegitarian}
          onChange={(newValue) => setIsVegitarian(newValue)}
        />
      </View>
    </ScrollView>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Ionicons
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});
export default FiltersScreen;
