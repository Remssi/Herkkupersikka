import {
  Create,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput
        source="manufacturerId"
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
      <ReferenceInput source="saleId" label="Sale" reference="sales" />
      <TextInput source="description" />
      <TextInput source="image" />
      <TextInput source="nutrients" />
      <NumberInput source="stock" />
    </SimpleForm>
  </Create>
);
