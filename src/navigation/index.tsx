import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Catagories from '../screens/catagories';
import Dashboard from '../screens/dashboard/index';
import useCategory from '../store/useCategory';
import {Category} from '../interfaces';

const Drawer = createDrawerNavigator();

export default function App() {
  const {categories} = useCategory();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen
          name="Categories"
          component={Catagories}
          options={{
            title: 'Manage Categories',
          }}
        />
        {categories.map((item: Category, index) => {
          return (
            <Drawer.Screen
              name={`Category ${index + 1}`}
              component={Catagories}
              key={index}
              options={{
                title: item?.name || `Category ${index + 1}`,
              }}
            />
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
