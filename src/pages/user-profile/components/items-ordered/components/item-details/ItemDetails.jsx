import { Box } from "@mui/material";
import { AccordionComponent } from "../../../../../../components/accordion-component";
import { OrderInfo } from "../../../../../../components/order-info";
import { Verticaltext } from "../../../../../../components/vertical-text";
import { CustomButton } from "../../../../../../components/custom-button";

export function ItemDetails({ orderDetails, paymentDetails, addressDetails }) {
  return (
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
  );
}
