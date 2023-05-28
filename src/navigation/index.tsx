import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Catagories from '../screens/catagories';
import Dashboard from '../screens/dashboard/index';
import useCategory from '../store/useCategory';
import {Category} from '../interfaces';
import CategoryItems from '../screens/categoryItems';


const Drawer = createDrawerNavigator();

export default function App() {
  const {categories} = useCategory();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Categories" component={Catagories} options={{
          title: 'Manage Categories'
        }} />
        {categories.map((item: Category) => {
          return <Drawer.Screen name={item.id} component={CategoryItems} options={{
            title: item.name
          }} />;
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
