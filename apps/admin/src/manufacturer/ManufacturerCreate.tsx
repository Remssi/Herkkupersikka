import { Create, SimpleForm, TextInput } from "react-admin";

export const ManufacturerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
