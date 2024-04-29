import { Box, Checkbox, Typography } from "@mui/material";
import { OrdersGrid } from "../orders-grid";
import { RightChevron } from "../../../../../../components/icons";

export function OrdersTable({ ordertablegrid, order, onOrderClick }) {
  return (
    <OrdersGrid gridStyles={ordertablegrid}>
      <Checkbox
        sx={{
          alignItems: "start",
          justifyContent: "start",
          padding: 0,
          "&.Mui-checked": {
            color: "var(--primary)",
          },
        }}
      />
      <Typography width={"90%"} sx={{ overflow: "hidden" }}>
        {order.id}
      </Typography>
      <Typography width={"80%"} sx={{ overflow: "hidden" }}>
        {order.date}
      </Typography>
      <Typography sx={{ textWrap: "wrap" }}>{order.price}</Typography>
      <Typography color={"var(--primary)"}>{order.status}</Typography>
      <Box
        textAlign={"end"}
        alignContent={"center"}
        onClick={() => onOrderClick(order.id)}
      >
        <RightChevron borderColor="var(--low-emphasis-text-color)" />
      </Box>
    </OrdersGrid>
  );
}
