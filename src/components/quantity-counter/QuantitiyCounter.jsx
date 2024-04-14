import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styles from './QuantitiyCounter.module.css';
import { useState } from 'react';

export const QuantityCounter = () => {
    const [value, setValue] = useState(0);

    const increaseHandler = (event) => {
        setValue(value + 1);
    }

    const decreaseHandler = (event) => {
        setValue(value - 1);
    }
    
    return (
        <div className={styles.container}>
            <span className={styles.quantityText}>Quantity:</span>
            <div className={styles.operations}>
                <button id='dec' type='button' onClick={decreaseHandler}>
                    <RemoveRoundedIcon />
                </button>
                <input type="number" value={value} />
                <button id='inc' type='button' onClick={increaseHandler}>
                    <AddRoundedIcon />
                </button>
            </div>
        </div>
    )
}