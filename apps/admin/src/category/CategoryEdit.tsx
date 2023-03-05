import { Edit, SimpleForm, TextInput, useRecordContext } from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Category: {record ? `${record.name}` : ""}</span>;
};

export const CategoryEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="color" />
      <TextInput source="description" multiline rows={5} />
    </SimpleForm>
  </Edit>
);
