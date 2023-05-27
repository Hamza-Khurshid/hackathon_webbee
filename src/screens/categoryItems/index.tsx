import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Exandable from '../../commonComponents/expandable';
import styles from './style';
import Item from './item';
import Fab from '../../commonComponents/fab';
import useCategory from '../../store/useCategory';
import {Category, Machine} from '../../interfaces';
import {generateUniqueId} from '../../utils/uniqueId';
import useMachines from '../../store/useMachines';

const Index = ({route}) => {
  const [open, setOpen] = useState(null);
  const {categories} = useCategory();

  const {machines, addNewMachine, deleteMachine} = useMachines();

  const toggle = (index: number) => () => {
    open == index ? setOpen(null) : setOpen(index);
  };

  const activeCategory = categories.find(item => item.id == route.name);


  const addNewMachineHandler = () => {

    const newMachine: Machine = {
      id: generateUniqueId(),
      categoryId: activeCategory?.id as string,
      attributes: {},
    };


    addNewMachine(newMachine);
  };


  const deleteMachineHandler = (machineId: string) => {
    deleteMachine(machineId);
  };

  return (
    <>
      <View style={styles.container}>
        {machines.map((item, index) => {
          return (
            <Exandable
              open={open == index}
              toggle={toggle(index)}
              key={index}
              onDelete={() => deleteMachineHandler(item.id)}>
              <Item machine={item} category={activeCategory as Category} />
            </Exandable>
          );
        })}
      </View>

      <Fab text="+" onPress={addNewMachineHandler} />
    </>
  );
};

export default Index;
