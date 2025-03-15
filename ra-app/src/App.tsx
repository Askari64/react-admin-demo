import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "./components/PosterComponents/PosterList";
import { PosterEdit } from "./components/PosterComponents/PosterEdit";
import { PosterCreate } from "./components/PosterComponents/PosterCreate";
import { CategoryList } from "./components/CategoryComponents/CategoryList";
import { CategoryEdit } from "./components/CategoryComponents/CategoryEdit";
import { CategoryCreate } from "./components/CategoryComponents/CategoryCreate";
import { PosterShow } from "./components/PosterComponents/PosterShow";
import { CategoryShow } from "./components/CategoryComponents/CategoryShow";

const dataProvider = jsonServerProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posters"
        list={PosterList}
        edit={PosterEdit}
        create={PosterCreate}
        show={PosterShow}
      />
      <Resource
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
        show={CategoryShow}
      />
    </Admin>
  );
}

export default App;
