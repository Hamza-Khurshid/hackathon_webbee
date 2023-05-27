import React from "react";
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../../theme/colors";
import Expandable from "../../commonComponents/expandable";


function Random({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>

      <Expandable />
      <Expandable />

    </View>
  );
}


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
      <Tab.Screen name={'One'} component={Random} />
      <Tab.Screen name={'Two'} component={Random} />
      <Tab.Screen name={'Thress'} component={Random} />
      <Tab.Screen name={'Four'} component={Random} />
      <Tab.Screen name={'Five'} component={Random} options={{ tabBarLabel: 'Instructor Questions' }} />

    </Tab.Navigator>
  );
};

export default Index;