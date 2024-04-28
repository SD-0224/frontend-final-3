import { Box } from "@mui/material"
import { AccordionComponent } from "../../../../components/accordion-component"
import { PaymentSection } from "../../../../components/payment-section/PaymentSection"
import { CustomInput } from "../../../../components/custom-input"
import { CustomButton } from "../../../../components/custom-button"

export const PaymentSide = ({ addressInputs, paymentMethods, paymentDetail }) => {
    const gridStyles = {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "20px 30px",
        paddingBlock: "24px",
        '@media (max-width: 600px)': {
            '&': {
                gridTemplateColumns: "1fr"
            }
        }
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <AccordionComponent title={"Add New Address"} isExpanded={true}>
                <Box sx={gridStyles}>
                    {addressInputs?.map(input => (
                        <CustomInput {...input} />
                    ))}
                </Box>
            </AccordionComponent>
            <PaymentSection paymentDetail={paymentDetail} paymentMethods={paymentMethods} />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <CustomButton href={"/my-cart"} variant="outlined" label={"Back to Cart"} style={{ border: "0px", textDecoration: "underline" }} />
                <CustomButton href={"/user-profile"} variant="contained" label={"Next"} />
            </Box>
        </Box>
    )
}