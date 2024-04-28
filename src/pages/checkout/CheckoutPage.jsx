import { Box } from "@mui/material";
import { PageTitle } from "../../components/page-title/PageTitle";
import { calcDiscount, calcSubTotal, calcTotal } from "../../modules/order-calculations";
import { PaymentSide } from "./components/payment-side/PaymentSide";
import { OrderSide } from "./components/order-side/OrderSide";
export const CheckoutPage = () => {

    const mainContainer = {
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        gap: "70px",
        '@media (max-width: 768px)': {
            '&': {
                gridTemplateColumns: "1fr"
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
    ];

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
    ];

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
            <Box sx={mainContainer}>
                <PaymentSide addressInputs={addressInputs} paymentDetail={paymentDetail} paymentMethods={paymentMethods} />
                <OrderSide orderDetails={orderDetails} products={products} />
            </Box>
        </Box>
    )
}