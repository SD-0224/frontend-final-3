import { PageTitle } from "../../components/page-title/PageTitle"
import { ProductsTable } from '../../components/products-table';
import { Box } from "@mui/material";
import styles from './MyCart.module.css';
import { OrderInfo } from "../../components/order-info/order-info";
import { CustomButton } from "../../components/custom-button";
import { calcTotal, calcSubTotal, calcDiscount } from '../../modules/order-calculations';

export const MyCart = () => {

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
        [
            "Sub Total",
            `$${subTotal}`
        ],
        [
            "Discount",
            `-$${discount}`
        ],
        [
            "Delivery Fee",
            "-$12.00"
        ],
        [
            "Grand Total",
            `$${total}`
        ],
    ];

    return (
        <Box sx={{ padding: "20px", marginBottom: "170px", '@media (max-width: 768px)': { '&': { marginBottom: "50px", padding: "12px" } } }}>
            <PageTitle title={"my cart"} />
            <Box className={styles.grid}>
                <ProductsTable products={products} />
                <Box className={styles.orderInfo}>
                    <OrderInfo title={"Order Summary"} orderInfo={orderDetails} />
                    <Box className={styles.operations}>
                        <CustomButton label={"Place Order"} />
                        <CustomButton label={"Continue Shopping"} variant="outlined" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}