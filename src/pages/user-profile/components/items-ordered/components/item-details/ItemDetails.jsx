import { Box } from "@mui/material";
import { AccordionComponent } from "../../../../../../components/accordion-component";
import { OrderInfo } from "../../../../../../components/order-info";
import { Verticaltext } from "../../../../../../components/vertical-text";
import { CustomButton } from "../../../../../../components/custom-button";
import { Link } from "react-router-dom";

export function ItemDetails({ orderDetails, paymentDetails, addressDetails }) {
  return (
    <AccordionComponent
      showExpandIcon={false}
      title={"Order Information"}
      expanded={true}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: " 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: { xs: "30px", lg: "0" },
        }}
      >
        <OrderInfo
          isTitleSmall={true}
          title={"Order Details"}
          orderInfo={orderDetails}
        />

        <Verticaltext title={"Payment Details"} info={paymentDetails} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Verticaltext title={"Address Details"} info={addressDetails} />
          <Box position={"relative"} right={"0"} top={"27px"}>
            <Link to="/">
              <CustomButton
                label={"Home"}
                fontSize="12px"
                padding="5px 20px"
                borderRadius="4px"
                color="var(--grey)"
                textColor="#000000"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </AccordionComponent>
  );
}
