import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {colors} from '../../theme/colors';
import CategoryItems from '../categoryItems';
import useCategory from '../../store/useCategory';

const Tab = createMaterialTopTabNavigator();
const Index = () => {
  const navigation: NavigationProp<any, any> = useNavigation();
  const {categories} = useCategory();

  const openCategories = () => {
    navigation.navigate('Categories');
  };

  return categories?.length ? (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 2,
        },
      }}
      sceneContainerStyle={{backgroundColor: colors.white}}>
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
    <View style={styles.container}>
      <Text>No Category Found</Text>
      <TouchableOpacity style={styles.button} onPress={openCategories}>
        <Text style={styles.buttonText}>Add New Category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  button: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '500',
  },
});
