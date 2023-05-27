import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme/colors';

type FabProps = {
  text: string;
  onPress: () => void;
};

function Fab({text, onPress}: FabProps) {
  return (
    <View style={styles.fabView}>
      <TouchableOpacity style={styles.fab} onPress={onPress}>
        <Text style={styles.fabText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Fab;

const styles = StyleSheet.create({
  fabView: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    zIndex: 100,
    borderRadius: 50 / 2,
  },

  fab: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    zIndex: 100,
    borderRadius: 50 / 2,
  },

  fabText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
