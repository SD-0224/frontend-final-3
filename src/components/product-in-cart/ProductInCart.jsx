import styles from './ProductInCart.module.css';
import { ProductImage } from '../product-image';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { QuantityCounter } from '../quantity-counter';

export const ProductInCart = ({ drawer = true, title = "Coach", subtitle = "Leather Coach Bag", price = "54.69", quantityValue = 1 }) => {
    return (
        <div className={styles.container}>
            <div className={styles.productData}>
                <ProductImage width={"80px"} src='./logo192.png' />
                <div className={styles.productSubData}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.subtitle}>{subtitle}</span>
                    {
                        drawer && <QuantityCounter quantityValue={quantityValue} showText={false} />
                    }
                    {
                        !drawer && <span>Qty- 1</span>
                    }
                </div>
            </div>
            {
                drawer &&
                <div className={styles.rightSide}>
                    <button className={styles.removeButton}>
                        <CloseRoundedIcon />
                    </button>
                    <span className={styles.price}>{price}</span>
                </div>
            }
        </div>
    )
}