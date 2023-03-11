import {
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const SaleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="multiplier" />
      <DateInput source="startDate" />
      <DateInput source="endDate" />
    </SimpleForm>
  </Edit>
);
