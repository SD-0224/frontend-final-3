import { Box } from "@mui/material";
import {
  calcDiscount,
  calcSubTotal,
  calcTotal,
} from "../../../../modules/order-calculations";
import { TabNavigation } from "../../../../components/tab-navigation";
import { SectionContainer } from "../../../../components/section-container";
import { ProductsTable } from "../../../../components/products-table";
import { AccordionComponent } from "../../../../components/accordion-component";
import { OrderInfo } from "../../../../components/order-info";
import { Verticaltext } from "../../../../components/vertical-text";
import { CustomButton } from "../../../../components/custom-button";

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
        <AccordionComponent
          isExpandIcon={false}
          title={"Order Information"}
          expanded={true}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: " 1fr",
                sm: "1fr 1fr",
                md: "minmax(0,2fr) minmax(0,1fr) minmax(0,2fr)",
              },
              gap: { xs: "20px 30px", sm: "20px 122px", md: "122px" },
            }}
          >
            <OrderInfo
              isTitleSmall={true}
              title={"Order Details"}
              orderInfo={orderDetails}
            />

            <Verticaltext title={"Payment Details"} info={paymentDetails} />
            <Box position={"relative"}>
              <Verticaltext title={"Address Details"} info={addressDetails} />
              <Box position={"absolute"} right={"0"} top={"27px"}>
                <CustomButton
                  label={"Home"}
                  fontSize="12px"
                  padding="5px 20px"
                  borderRadius="4px"
                  color="var(--grey)"
                  textColor="#000000"
                  href="/"
                />
              </Box>
            </Box>
          </Box>
        </AccordionComponent>
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
