import * as React from "react";
import { FormControl, RadioGroup } from "@mui/joy";
import { PaymentComponent } from "./components/payment-component";
import { AccordionComponent } from "../accordion-component";
import { PaymentBottom } from "./components/payment-bottom";

export function PaymentSection({ paymentMethods, paymentDetail }) {
  return (
    <AccordionComponent title={"Payment"}>
      <FormControl>
        <RadioGroup
          name="member"
          defaultValue="payments"
          orientation="horizontal"
          width="100%"
          sx={{ gap: "20px", flexWrap: "wrap", justifyContent: "center" }}
        >
          {paymentMethods?.map((method) => (
            <>
              <PaymentComponent key={method.title} paymentMethod={method} />
            </>
          ))}
        </RadioGroup>
      </FormControl>
      <PaymentBottom paymentDetail={paymentDetail} />
    </AccordionComponent>
  );
}
