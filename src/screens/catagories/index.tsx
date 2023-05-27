import React from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {styles} from './style';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InputField from '../../commonComponents/textInput';
import SwitchField from '../../commonComponents/switchField';
import DatePickerField from '../../commonComponents/datePickerField';

function Catagories() {
  const [date, setDate] = React.useState(new Date());

  return (
    <View style={{backgroundColor: '#ffff'}}>
      <View style={styles.fieldsCont}>
        <InputField value='' placeholder='' label='search' onChangeText={()=>{}} />
        <InputField value='' placeholder='' label='search' onChangeText={()=>{}} />
        <InputField value='' placeholder='' label='search' onChangeText={()=>{}} />
        <InputField value='' placeholder='' label='search' onChangeText={()=>{}} />

        <SwitchField  value={true} onChange={()=>{}} label="fjsl"/>

        <DatePickerField date={date} setDate={setDate} />

      
      </View>
    </View>
  );
}

export default Catagories;
