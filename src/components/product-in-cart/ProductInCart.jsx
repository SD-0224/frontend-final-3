import styles from './ProductInCart.module.css';
import ProductImage from '../product-image';

export const ProductInCart = ({ drawer }) => {
    return (
        <div>
            <div>
                <ProductImage />
                <div>
                    <span></span>
                    <span></span>
                    {/* 
                        Here will be condition for showing quantitiy-counter
                        Here will be the quantity-counter 
                     */}
                    {/* 
                        Here will be conditon for showing Qty- 1
                        Here will be the span which hold the value
                     */}
                </div>
            </div>
            <div>
                {/* 
                    Here will be conditon for showing both remove-button & price 
                    Here will be the remove and price     
                */}
            </div>
        </div>
    )
}