import { Box, Checkbox, Typography } from "@mui/material";
import { OrdersGrid } from "../orders-grid";
import { RightChevron } from "../../../../../../components/icons";

export function OrdersTable({ ordertablegrid, order, onOrderClick, total }) {
  const date = new Date(order.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

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
        {formattedDate}
      </Typography>
      <Typography sx={{ textWrap: "wrap" }}>{total}</Typography>
      <Typography color={"var(--primary)"}>{order.status}</Typography>
      <Box
        textAlign={"end"}
        alignContent={"center"}
        onClick={() => onOrderClick(order.id, order.orderNumber)}
      >
        <RightChevron borderColor="var(--low-emphasis-text-color)" />
      </Box>
    </OrdersGrid>
  );
}
