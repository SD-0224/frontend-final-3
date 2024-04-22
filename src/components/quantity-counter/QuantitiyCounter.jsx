import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styles from './QuantitiyCounter.module.css';
import { useState } from 'react';

export const QuantityCounter = ({ quantity = 0, showText = true }) => {
    const [value, setValue] = useState(quantity);
    
    const increaseHandler = () => {
        setValue((value) => value + 1);
    }
    
    const decreaseHandler = () => {
        setValue((value) => value - 1);
    }
    
    const isDisabled = !value ? styles.disabled : '';
    
    return (
        <div className={styles.container}>
            {showText && <span className={styles.quantityText}>Quantity:</span>}
            <div className={styles.operations}>
                <button className={`${styles.counterOperation} ${isDisabled}`} type='button' onClick={decreaseHandler}>
                    <RemoveRoundedIcon />
                </button>
                <input type="number" value={value} />
                <button className={styles.counterOperation} type='button' onClick={increaseHandler}>
                    <AddRoundedIcon />
                </button>
            </div>
        </div>
    )
}