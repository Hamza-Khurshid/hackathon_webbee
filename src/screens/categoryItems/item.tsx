import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import {Category, Machine} from '../../interfaces';
import InputField from '../../commonComponents/textInput';
import SwitchField from '../../commonComponents/switchField';
import DatePickerField from '../../commonComponents/datePickerField';
import useMachines from '../../store/useMachines';

type ItemProps = {
  machine: Machine;
  category: Category;
};

const Item = ({machine, category}: ItemProps) => {
  const {updateMachine} = useMachines();

  const updateMachineHandler = (
    value: string | number | Date | boolean,
    key: string,
  ) => {

    let newMachine = {
      ...machine,
      attributes: {...machine.attributes, [key]: value},
    };
    updateMachine(newMachine);
  };

  return (
    <View>
      {Object.keys(category.fields).map((key, index) => {
        const field = category.fields[key];

        return (
          <View  key={index}>
            {['text', 'number'].includes(field.type) ? (
              <InputField
                label={field.name}
                type={field.type as 'text' | 'number'}
               
                placeholder=""
                value={machine.attributes[key] as string | number}
                onChangeText={val => updateMachineHandler(val, key)}
              />
            ) : field.type === 'date' ? (
              <DatePickerField
                label={field.name}
                date={new Date((machine.attributes[key] as Date) || new Date())}
                setDate={val => updateMachineHandler(val, key)}
              />
            ) : (
              <SwitchField
                label={field.name}
                value={machine.attributes[key] as boolean}
                onChange={val => updateMachineHandler(val, key)}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  mR: {
    marginRight: 15,
  },
});
