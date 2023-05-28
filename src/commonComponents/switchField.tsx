import React from 'react';

import {View, Text, Switch, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

type SwitchFieldProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

function SwitchField({label, value, onChange}: SwitchFieldProps) {
  return (
    <View style={styles.switchCont}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        trackColor={{true: colors.primary, false: colors.border}}
        onValueChange={onChange}
      />
    </View>
  );
}

export default SwitchField;

const styles = StyleSheet.create({
  switchCont: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000000',
  },
});
