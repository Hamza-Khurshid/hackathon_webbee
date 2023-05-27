import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../../theme/colors';
import CategoryItems from '../categoryItems';
import useCategory from '../../store/useCategory';

const Tab = createMaterialTopTabNavigator();
const Index = () => {
  const {categories} = useCategory();

  return categories?.length ? (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 2,
        },
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      {categories.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.id}
            component={CategoryItems}
            options={{
              tabBarLabel: item.name || 'new category',
            }}
          />
        );
      })}
    </Tab.Navigator>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>No Category Found</Text>
    </View>
  );
};

export default Index;
