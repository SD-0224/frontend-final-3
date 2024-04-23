import { ProductInCart } from '../product-in-cart';

export const ProductsTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><ProductInCart drawer={false} title={"Coach"} subtitle={"Leather Coach Bag"} quantity={1} /></td>
                    <td>$54.69</td>
                    <td>1</td>
                    <td>
                        <div>
                            <span>$54.69</span>
                            <button type="button">Remove</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}