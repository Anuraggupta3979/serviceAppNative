import React from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealReducers from "./store/reducers/meals";
enableScreens();

const rootReducer = combineReducers({
  meals: mealReducers,
});
const store = createStore(rootReducer);
export default function App({ navigation }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </Provider>
  );
}
