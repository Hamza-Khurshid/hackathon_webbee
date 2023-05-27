import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Catagories from '../screens/catagories';
import Dashboard from '../screens/dashboard/index';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Categories" component={Catagories} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
