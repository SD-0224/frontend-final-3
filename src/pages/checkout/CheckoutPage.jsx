import { Box } from "@mui/material";
import { PageTitle } from "../../components/page-title/PageTitle";
import { AccordionComponent } from "../../components/accordion-component/AccordionComponent";
import { CustomInput } from "../../components/custom-input";
import { PaymentSection } from "../../components/payment-section/PaymentSection";
import { OrderInfo } from "../../components/order-info/OrderInfo";
import { calcDiscount, calcSubTotal, calcTotal } from "../../modules/order-calculations";
import { ProductInCart } from "../../components/product-in-cart";
import { CustomButton } from '../../components/custom-button';
export const CheckoutPage = () => {

    const gridStyles = {
        mainGrid: {
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "70px",
            '@media (max-width: 768px)': {
                '&': {
                    gridTemplateColumns: "1fr"
                }
            }
        },
        grid: {
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
    }

    const addressInputs = [
        {
            label: "Full Name",
            id: "firstName",
            placeholder: "Enter Name",
            type: "text",
            required: true,
        },
        {
            label: "Mobile Number",
            id: "mobileNumber",
            placeholder: "+11",
            type: "text",
            required: true,
        },
        {
            label: "Street Address",
            id: "streetAddress",
            placeholder: "Enter Address",
            type: "text",
            required: true,
        },
        {
            label: "State",
            id: "state",
            placeholder: "Enter State",
            type: "text",
            required: true,
        },
        {
            label: "City",
            id: "city",
            placeholder: "Enter City",
            type: "text",
            required: true,
        },
        {
            label: "Pin Code",
            id: "pinCode",
            placeholder: "Enter Pin Code",
            type: "text",
            required: true,
        },
    ];

    const paymentMethods = [
        {
            title: "UPI",
            src: "/upi.png",
        },
        {
            title: "Credit/Debit Card",
            src: "/credit.png",
        },
        {
            title: "Apple Pay",
            src: "/applepay.png",
        },
        {
            title: "Amazon Pay",
            src: "/amazonpay.png",
        },
    ]

    const paymentDetail = [
        {
            title: "Google Pay",
            src: "/google.png",
        },
        {
            title: "Phone Pe",
            src: "/phonepe.png",
        },
        {
            title: "Paytm",
            src: "/paytm.png",
        },
    ]
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
            discount: 30,
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

    return (
        <Box sx={{ padding: "20px" }}>
            <PageTitle title={"Checkout"} />
            <Box sx={gridStyles.mainGrid}>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <AccordionComponent title={"Add New Address"} isExpanded={true}>
                        <Box sx={gridStyles.grid}>
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

                <Box sx={{ display: "flex", flexDirection: "column", gap: "60px", height: "fit-content", maxHeight: "fit-content", position: "sticky", top: "130px" }}>
                    <OrderInfo title={"Order Summary"}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: "column",
                            gap: "24px",
                        }}>
                            {products?.map((product, index) => (
                                <ProductInCart
                                    key={index}
                                    drawer={false}
                                    title={product.title}
                                    subtitle={product.subtitle}
                                    quantity={product.quantity}
                                />
                            ))}
                        </Box>
                    </OrderInfo>
                    <OrderInfo title={"Order Details"} orderInfo={orderDetails} />
                </Box>

            </Box>
        </Box>
    )
}