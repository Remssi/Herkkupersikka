import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { CategoryList } from "./category/CategoryList";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryCreate } from "./category/CategoryCreate";
import { ManufacturerList } from "./manufacturer/ManufacturerList";
import { ManufacturerEdit } from "./manufacturer/ManufacturerEdit";
import { ProductList } from "./product/ProductList";
import { ProductEdit } from "./product/ProductEdit";
import { SaleList } from "./sale/SaleList";
import { SaleEdit } from "./sale/SaleEdit";
import { ProductCreate } from "./product/ProductCreate";
import { SaleCreate } from "./sale/SaleCreate";
import { ManufacturerCreate } from "./manufacturer/ManufacturerCreate";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import FactoryIcon from "@mui/icons-material/Factory";
import CategoryIcon from "@mui/icons-material/Category";
import DiscountIcon from "@mui/icons-material/Discount";

const dataProvider = jsonServerProvider("http://localhost:3001/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
      icon={LocalPizzaIcon}
    />

    <Resource
      name="manufacturers"
      list={ManufacturerList}
      edit={ManufacturerEdit}
      create={ManufacturerCreate}
      recordRepresentation="name"
      icon={FactoryIcon}
    />

    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      recordRepresentation="name"
      icon={CategoryIcon}
    />

    <Resource
      name="sales"
      list={SaleList}
      edit={SaleEdit}
      create={SaleCreate}
      recordRepresentation="multiplier"
      icon={DiscountIcon}
    />
  </Admin>
);

export default App;
