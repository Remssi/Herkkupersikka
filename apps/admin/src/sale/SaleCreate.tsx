import { DateInput, Create, NumberInput, SimpleForm } from "react-admin";

export const SaleCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="multiplier" />
      <DateInput source="startDate" />
      <DateInput source="endDate" />
    </SimpleForm>
  </Create>
);
