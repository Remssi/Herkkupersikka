import {
  Datagrid,
  List,
  NumberField,
  ReferenceArrayField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";
import ColoredChipField from "../ColoredChipField";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField
        source="manufacturerId"
        label="Manufacturer"
        reference="manufacturers"
      />
      <ReferenceArrayField
        source="categoryIds"
        label="Categories"
        reference="categories"
      >
        <SingleFieldList>
          <ColoredChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <NumberField source="normalPrice" />
      <NumberField source="currentPrice" />
      <ReferenceField source="saleId" label="Sale" reference="sales" />
      <NumberField source="stock" />
    </Datagrid>
  </List>
);
