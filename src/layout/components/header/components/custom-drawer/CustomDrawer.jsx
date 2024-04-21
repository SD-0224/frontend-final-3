import { useMemo, Fragment } from 'react';

import styles from './CustomDrawer.module.css';

import { Drawer, Box, Divider } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';


import { ProductInCart } from '../../../../../components/product-in-cart';
import { CustomButton } from '../../../../../components/custom-button';
import { CustomInput } from '../../../../../components/custom-input';
import { FinancialDetails } from '../financial-details';

export const CustomDrawer = ({ toggleDrawer, open }) => {

    const drawerStyles = {
        zIndex: 99999,
        '& .MuiDrawer-paper': {
            padding: "20px 40px 10px",
            width: "420px",
            top: "104px",
            height: "fit-content",
            maxHeight: "calc(100vh - 104px)",
            overflow: "auto",
        },
        '@media (max-width: 768px)': {
            '& .MuiDrawer-paper': {
                padding: "8px",
                width: "260px",
                top: "60px",
                maxHeight: 'calc(100vh - 60px)',
            }
        }
    }

    const memoizedProductsInCart = useMemo(() => {
        const productsInCart = [
            {
                title: "Coach",
                subtitle: "Leather Coach Bag",
                price: 50,
                quantityValue: 5
            },
            {
                title: "Coach",
                subtitle: "Leather Coach Bag",
                price: 50,
                quantityValue: 5
            },
        ];

        return productsInCart?.map((product, index) => (
            <Fragment key={index}>
                <ProductInCart
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    quantityValue={product.quantityValue}
                />
                <Divider sx={{ marginTop: "50px", marginBottom: "24px", '@media (max-width: 600px)': { marginTop: "12px" } }} />
            </Fragment>
        ));
    }, []);

    return (
        <Drawer className={styles.drawer} open={open} onClose={toggleDrawer(false)} sx={drawerStyles} anchor={"right"}>
            <button className={styles.closeDrawer} onClick={toggleDrawer(false)}>
                <KeyboardBackspaceRoundedIcon />
                <span>Back</span>
            </button>

            {memoizedProductsInCart}

            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px", '@media (max-width: 600px)': { marginBottom: "12px" } }}>
                <FinancialDetails title={"Subtotal"} amount={109.38} total={false} />
                <FinancialDetails title={"Tax"} amount={2.00} total={false} />
                <FinancialDetails title={"Total"} amount={111.38} total={true} />
            </Box>

            <Box sx={{ position: "relative", marginBottom: "24px", '@media (max-width: 600px)': { marginBottom: "12px" } }}>
                <CustomInput type={"text"} placeholder={"Apply Coupon Code"} style={{ width: "90%", margin: "auto" }} />
                <button type="button" className={styles.check}>CHECK</button>
            </Box>

            <CustomButton label={"Place Order"} />

            <button className={styles.continueShopping} onClick={toggleDrawer(false)}>
                <span>Continue Shopping</span>
            </button>
        </Drawer>
    )
}