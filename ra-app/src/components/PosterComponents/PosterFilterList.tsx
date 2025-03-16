import { FilterList, FilterListItem, FilterLiveSearch } from "react-admin";
import {Card, CardContent} from '@mui/material'
import CategoryIcon from "@mui/icons-material/LocalOffer"


function PosterFilterList() {
  return (
    <Card sx={{order: -1, mr: '24px', mt: '48px', width: 250}}>
        <CardContent>
            <FilterLiveSearch/>
            <FilterList label="Categories" icon={<CategoryIcon/>}>
            <FilterListItem label="animals" value={{category_id: 1}} />
            <FilterListItem label="beard" value={{category_id: 2}} />
            <FilterListItem label="business" value={{category_id: 3}} />
            <FilterListItem label="cars" value={{category_id: 4}} />
            <FilterListItem label="city" value={{category_id: 5}} />
            <FilterListItem label="flowers" value={{category_id: 6}} />
            <FilterListItem label="food" value={{category_id: 7}} />
            <FilterListItem label="nature" value={{category_id: 8}} />
            <FilterListItem label="people" value={{category_id: 9}} />
            <FilterListItem label="sports" value={{category_id: 10}} />
           
            </FilterList>
        </CardContent>
    </Card>
  )
}

export default PosterFilterList