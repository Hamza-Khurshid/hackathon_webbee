import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

type DatePickerFieldProps = {
  label: string;
  date: Date;
  setDate: (date: Date) => void;
};

function DatePickerField({
  label,
  date = new Date(),
  setDate,
}: DatePickerFieldProps) {
  const [pickerVisible, setPickerVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={() => setPickerVisible(true)}>
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
        onConfirm={(dateVal: Date) => {
          setPickerVisible(false);
          setDate(dateVal);
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
    fontWeight: '500',
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
  container: {
    paddingTop: 10,
  },
});
