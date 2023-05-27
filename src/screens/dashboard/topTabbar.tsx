import React from "react";
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../../theme/colors";
import CategotyItems from '../categoryItems'





const Tab = createMaterialTopTabNavigator();
const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true, tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 2,

        }
      }}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen name={'One'} component={CategotyItems} />
      <Tab.Screen name={'Two'} component={CategotyItems} />
      <Tab.Screen name={'Thress'} component={CategotyItems} />
      <Tab.Screen name={'Four'} component={CategotyItems} />
      <Tab.Screen name={'Five'} component={CategotyItems} options={{ tabBarLabel: 'Instructor Questions' }} />

    </Tab.Navigator>
  );
};

export default Index;