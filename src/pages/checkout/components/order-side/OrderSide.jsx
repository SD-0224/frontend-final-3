import { Box } from "@mui/material"
import { OrderInfo } from "../../../../components/order-info/OrderInfo"
import { ProductInCart } from "../../../../components/product-in-cart"

export const OrderSide = ({ orderDetails, products }) => {
    const styles = {
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        height: "fit-content",
        maxHeight: "fit-content",
        position: "sticky",
        top: "130px"
    };
    return (
        <Box sx={styles}>
            <OrderInfo title={"Order Summary"}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: "24px",
                }}>
                    {products?.map((product, index) => (
                        <ProductInCart
                            src={product.smallImageUrl}
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
    )
}