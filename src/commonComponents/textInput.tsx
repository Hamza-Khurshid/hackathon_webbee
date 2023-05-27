import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

type InputFieldProps = {
  label: string;
  placeholder?: string;
  value: string | number;
  type?: 'text' | 'number';
  onChangeText: (value: string) => void;
};

function InputField({
  label,
  placeholder,
  type,
  value = '',
  onChangeText,
}: InputFieldProps) {
  return (
    <View style={styles.fieldCont}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.fieldInput}
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
    paddingVertical: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000000',
  },
  fieldCont: {
    paddingVertical: 10,
  }
});
