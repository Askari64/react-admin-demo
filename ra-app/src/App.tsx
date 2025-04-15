import { BrowserRouter } from "react-router-dom";
import { Auth0Client } from "@auth0/auth0-spa-js";
import { Auth0AuthProvider, httpClient } from "ra-auth-auth0";
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

const auth0 = new Auth0Client({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  cacheLocation: 'localstorage',
  authorizationParams: {
      audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  },
});

export const authProvider = Auth0AuthProvider(auth0, {
  loginRedirectUri: import.meta.env.VITE_LOGIN_REDIRECT_URL,
});

const dataProvider = jsonServerProvider("http://localhost:3000", httpClient(auth0));

function App() {

  if (!auth0) {
    return <div>Loading...</div>;
}

  return (
    <BrowserRouter>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
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
    </BrowserRouter>
  );
}

export default App;
