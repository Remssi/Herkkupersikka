import {
  ChipField,
  Datagrid,
  List,
  NumberField,
  ReferenceArrayField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField
        source="manufacturer.id"
        label="Manufactorer"
        reference="manufacturers"
      />
      <ReferenceArrayField
        source="categoryIds"
        label="Categories"
        reference="categories"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <NumberField source="normalPrice" />
      <NumberField source="currentPrice" />
      <ReferenceField source="sale.id" label="Sale" reference="sales" />
      <TextField source="description" />
      <TextField source="image" />
      <TextField source="nutrients" />
      <NumberField source="stock" />
    </Datagrid>
  </List>
);
