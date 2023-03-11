import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";

export const SaleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="multiplier" />
      <DateField source="startDate" />
      <DateField source="endDate" />
    </Datagrid>
  </List>
);
