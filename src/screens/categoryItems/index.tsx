import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import Exandable from '../../commonComponents/expandable';
import styles from './style';
import Item from './item';
import Fab from '../../commonComponents/fab';
import useCategory from '../../store/useCategory';
import {Category, Machine} from '../../interfaces';
import {generateUniqueId} from '../../utils/uniqueId';
import useMachines from '../../store/useMachines';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<any, any>;
};

const Index = ({route}: Props) => {
  const [open, setOpen] = useState<number | null>(null);
  const {categories} = useCategory();

  const {getMachines, addNewMachine, deleteMachine} = useMachines();

  const toggle = (index: number) => () => {
    open === index ? setOpen(null) : setOpen(index);
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
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        {getMachines(activeCategory?.id as string)?.map((item, index) => {
          const titleValue =
            item.attributes?.[activeCategory?.titleFieldId as string] ||
            'New Machine';
          const title =
            typeof titleValue === 'object'
              ? titleValue.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })
              : titleValue.toString();

          return (
            <Exandable
              open={open == index}
              toggle={toggle(index)}
              title={title}
              key={index}
              onDelete={() => deleteMachineHandler(item.id)}>
              <Item machine={item} category={activeCategory as Category} />
            </Exandable>
          );
        })}
      </ScrollView>

      <Fab text="+" onPress={addNewMachineHandler} />
    </View>
  );
};

export default Index;
