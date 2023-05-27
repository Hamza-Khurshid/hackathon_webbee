import React from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {styles} from './style';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Catagories() {
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const categories = [
    {
      name: 'Initial Email',
      fields: {
        id1: {
          name: 'Subject',
          type: 'text',
          isTitleField: true,
          fieldId: 2,
        },
        id: 1,
      },
    },
  ];

  return (
    <View style={{backgroundColor: '#ffff'}}>
      <View style={styles.fieldsCont}>
        {/* {categories.map(category => {
        return ( */}
        <View>
          <Text style={styles.label}>Search</Text>
          <TextInput style={styles.fieldInput} placeholder="" />
        </View>
        <View style={styles.switchCont}>
          <Text style={styles.label}>Search</Text>
          <Switch
            value={true}
            trackColor={{true: '#FFCA21', false: '#B8B8B8'}}
          />
        </View>

        {/* date picker */}

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

        {/* );
      })} */}
      </View>
    </View>
  );
}

export default Catagories;
