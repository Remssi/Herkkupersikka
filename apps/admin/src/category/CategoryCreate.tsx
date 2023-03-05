import { Create, SimpleForm, TextInput } from "react-admin";

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="color" />
      <TextInput source="description" multiline rows={5} />
    </SimpleForm>
  </Create>
);
