import React, {Fragment} from 'react';
import {StyleSheet, Text, View, TextInput, ViewStyle} from 'react-native';

type InputFieldProps = {
  label: string;
  placeholder?: string;
  value: string | number;
  type?: 'text' | 'number';
  onChangeText: (value: string) => void;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
};

function InputField({
  label,
  placeholder,
  type,
  value = '',
  onChangeText,
  containerStyle,
  style,
}: InputFieldProps) {
  return (
    <View style={{...styles.fieldCont, ...containerStyle}}>
      {label ? <Text style={styles.label}>{label}</Text> : <Fragment />}
      <TextInput
        style={{...styles.fieldInput, ...style}}
        value={value.toString()}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={type === 'number' ? 'numeric' : 'default'}
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  fieldInput: {
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 2,
    paddingHorizontal: 10,
    height: 38,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 15,
    color: '#000000',
  },
  fieldCont: {
    paddingVertical: 10,
  },
});
