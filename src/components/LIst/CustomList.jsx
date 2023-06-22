import { List, Stack } from "@mui/material";
import PropTypes from "prop-types";
import CustomItem from "./CustomItem";

function CustomList({ data, ...others }) {
    return (
        <List component={Stack} sx={{ bgcolor: 'background.paper', flexDirection: "row", flexWrap: "wrap" }} {...others}>
            {data.map((shipment) => <CustomItem key={shipment.code} shipment={shipment} />)}
            {/* {data.map((shipment) => <CustomItem key={shipment.code} shipment={shipment} />)}
            {data.map((shipment) => <CustomItem key={shipment.code} shipment={shipment} />)}
            {data.map((shipment) => <CustomItem key={shipment.code} shipment={shipment} />)}
            {data.map((shipment) => <CustomItem key={shipment.code} shipment={shipment} />)} */}
        </List>
    )
}

CustomList.propTypes = {
    data: PropTypes.array,
}

export { CustomList };