import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { CategoryList } from "./category/CategoryList";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryCreate } from "./category/CategoryCreate";

const dataProvider = jsonServerProvider("http://localhost:3001/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
  </Admin>
);

export default App;
