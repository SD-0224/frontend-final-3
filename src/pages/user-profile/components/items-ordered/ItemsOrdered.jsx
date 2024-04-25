import { Box } from "@mui/material";
import {
  calcDiscount,
  calcSubTotal,
  calcTotal,
} from "../../../../modules/order-calculations";
import { TabNavigation } from "../../../../components/tab-navigation";
import { SectionContainer } from "../../../../components/section-container";
import { ProductsTable } from "../../../../components/products-table";
import { CustomButton } from "../../../../components/custom-button";
import { ItemDetails } from "./components/item-details";

export function ItemsOrdered() {
  const products = [
    {
      title: "Coach",
      subtitle: "Leather Coach Bag",
      quantity: 1,
      price: 54.69,
      discount: 20,
    },
    {
      title: "Coach",
      subtitle: "Leather Coach Bag",
      quantity: 1,
      price: 54.69,
      discount: 20,
    },
  ];

  let subTotal = calcSubTotal(products);
  let discount = calcDiscount(products);
  let total = calcTotal(subTotal, discount);

  const orderDetails = [
    ["Sub Total", `$${subTotal}`],
    ["Discount", `-$${discount}`],
    ["Delivery Fee", "-$12.00"],
    ["Grand Total", `$${total}`],
  ];

  const paymentDetails = ["Cash on Delivery"];

  const addressDetails = [
    "Vincent Lobo",
    "3068  Woodlawn Drive",
    "Milwaukee",
    "414-672-5388",
  ];

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
