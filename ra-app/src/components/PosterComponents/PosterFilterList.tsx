import {
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  useGetList,
} from "react-admin";
import { Card, CardContent } from "@mui/material";
import CategoryIcon from "@mui/icons-material/LocalOffer";

function PosterFilterList() {
  const { data, error } = useGetList("categories", {
    sort: { field: "id", order: "ASC" },
  });

  if (error) return <p>{error.message}</p>;

  return (
    <Card sx={{ order: -1, mr: "24px", mt: "48px", width: 250 }}>
      <CardContent>
        <FilterLiveSearch />
        <FilterList label="Categories" icon={<CategoryIcon />}>
          {data?.map((category_data) => (
            <FilterListItem
              id={category_data.id}
              label={category_data.name}
              value={{ category_id: category_data.id }}
            />
          ))}
        </FilterList>
      </CardContent>
    </Card>
  );
}

export default PosterFilterList;
