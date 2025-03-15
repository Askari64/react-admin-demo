import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  ImageField,
  UrlField,
} from "react-admin";

export const PosterList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="title" />
      <NumberField source="width" />
      <NumberField source="height" />
      <NumberField source="price" />
      <ImageField source="thumbnail" />
      <UrlField source="image" content="View" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" sx={{ fontWeight: "bold" }} emptyText="N/A" />
    </Datagrid>
  </List>
);
