


export type Category = {
  id: string;
  name: string;
  createdAt: Date;
  titleFieldId: string;
  fields: {
    [key: string]: Field;
  };
};

export type FieldTypes = 'text' | 'number' | 'checkbox' | 'date';

export type Field = {
  name: string;
  type: FieldTypes;
};


export type Machine = {
    categoryId: string;
    id: string;
    attributes: {
        [key: string]: string | number | boolean | Date;
    }
}
