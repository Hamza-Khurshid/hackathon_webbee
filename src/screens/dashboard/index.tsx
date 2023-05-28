import {View} from 'react-native';
import React from 'react';
import Tabbar from './topTabbar';
import {colors} from '../../theme/colors';

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Tabbar />
    </View>
  );
};

export default Index;
