import { Box } from "@mui/material";
import { TabNavigation } from "../../../../components/tab-navigation";
import { SectionContainer } from "../../../../components/section-container";
import { ProductsTable } from "../../../../components/products-table";
import { CustomButton } from "../../../../components/custom-button";
import { ItemDetails } from "./components/item-details";

export function ItemsOrdered({
  products,
  orderDetails,
  paymentDetails,
  addressDetails,
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <TabNavigation
        titles={["Items Ordered", "Invoices", "Order Shipment"]}
        tabPadding="12px 16px"
        tabsPadding="12px 18px"
      />
      <SectionContainer padding="0 8px 0 0">
        <ProductsTable products={products} isRemove={false} />
        <ItemDetails {...{ orderDetails, paymentDetails, addressDetails }} />
      </SectionContainer>
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          justifyContent: "end",
        }}
      >
        <CustomButton label={"Reorder"} padding="10px 41px" />
        <CustomButton
          label={"Add Rating"}
          variant="outlined"
          padding="8px 25px"
        />
      </Box>
    </Box>
  );
}
