import React from 'react';

import {styles} from './style';
import {ScrollView} from 'react-native-gesture-handler';

import useCategory from '../../store/useCategory';
import Category from './category';
import Fab from '../../commonComponents/fab';

function Catagories() {
  const {categories, addNewCategory} = useCategory();

  const [expanded, setExpanded] = React.useState<null | string>(null);

  const addNewCategoryHandler = () => {
    addNewCategory();
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        {/* list all categories */}

        {categories.map((category, index) => {
          return (
            <Category
              key={index}
              category={category}
              onExpand={(val: string | null) => setExpanded(val)}
              expanded={expanded}
            />
          );
        })}
      </ScrollView>
      {/* FAB to add a new category */}
      <Fab text="+" onPress={addNewCategoryHandler} />
    </>
  );
}

export default Catagories;
