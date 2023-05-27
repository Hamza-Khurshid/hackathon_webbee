import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

type DatePickerFieldProps = {
  date: Date;
  setDate: (date: Date) => void;
};

function DatePickerField({date, setDate}: DatePickerFieldProps) {
  const [pickerVisible, setPickerVisible] = React.useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setPickerVisible(true)}>
        <Text style={styles.label}>Date Picker</Text>
        <Text style={styles.fieldInput}>
          {date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={pickerVisible}
        date={date}
        onConfirm={date => {
          setPickerVisible(false);
          setDate(date);
        }}
        onCancel={() => {
          setPickerVisible(false);
        }}
      />
    </View>
  );
}

export default DatePickerField;

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000000',
  },
  fieldInput: {
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },
});
