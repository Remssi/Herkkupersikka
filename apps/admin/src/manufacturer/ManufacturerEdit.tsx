import { Edit, SimpleForm, TextInput } from "react-admin";

export const ManufacturerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
