import { Box } from "@mui/material";
import { TabNavigation } from "../../../../components/tab-navigation";
import { ProductsTable } from "../../../../components/products-table";
import { CustomButton } from "../../../../components/custom-button";
import { ItemDetails } from "./components/item-details";
import {
  calcDiscount,
  calcSubTotal,
  calcTotal,
} from "../../../../modules/order-calculations";

export function ItemsOrdered({ orderData = [] }) {
  const { address = {} } = orderData || {};
  const pinCode = address.pinCode || "";
  const streetAddress = address.streetAddress || "";
  const city = address.city || "";
  const state = address.state || "";

  const products = orderData.products || [];

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

  const addressDetails = [state, city, streetAddress, pinCode];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <TabNavigation
        titles={["Items Ordered", "Invoices", "Order Shipment"]}
        tabPadding="12px 16px"
        tabsPadding="12px 18px"
        handleTabClick={() => console.log("tab clicked")}
      />
      <Box
        sx={{ maxHeight: "30vh", overflowY: "auto", scrollbarWidth: "thin" }}
      >
        {products && (
          <ProductsTable
            products={products}
            isRemove={false}
            isItemOrdered={false}
          />
        )}
      </Box>
      <ItemDetails {...{ orderDetails, paymentDetails, addressDetails }} />
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
