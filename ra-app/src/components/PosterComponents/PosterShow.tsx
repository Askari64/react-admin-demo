import {
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  UrlField,
} from "react-admin";

export const PosterShow = () => (
  <Show>
    <SimpleShowLayout>
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
    </SimpleShowLayout>
  </Show>
);
