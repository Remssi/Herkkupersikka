import {
  Edit,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceInput
        source="manufacturer.id"
        label="Manufacturer"
        reference="manufacturers"
      />
      <ReferenceArrayInput
        source="categoryIds"
        label="Categories"
        reference="categories"
      />
      <NumberInput source="normalPrice" />
      <NumberInput source="currentPrice" />
      <ReferenceInput source="sale.id" label="Sale" reference="sales" />
      <TextInput source="description" />
      <TextInput source="image" />
      <TextInput source="nutrients" />
      <NumberInput source="stock" />
    </SimpleForm>
  </Edit>
);
