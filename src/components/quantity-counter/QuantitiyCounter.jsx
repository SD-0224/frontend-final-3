import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styles from './QuantitiyCounter.module.css';
import { useEffect, useState } from 'react';

export const QuantityCounter = ({quantityValue = 0}) => {
    const [value, setValue] = useState(quantityValue);

    const increaseHandler = () => {
        setValue(value + 1);
    }

    const decreaseHandler = () => {
        setValue(value - 1);
    }

    useEffect(() => {
        if (!value) {
            document.getElementById("dec").style.pointerEvents = "none";
            document.getElementById("dec").style.opacity = "0.2";
        } else {
            document.getElementById("dec").style.pointerEvents = "auto";
            document.getElementById("dec").style.opacity = "1";
        }
    }, [value])


    return (
        <div className={styles.container}>
            <span className={styles.quantityText}>Quantity:</span>
            <div className={styles.operations}>
                <button className={styles.counterOperation} id='dec' type='button' onClick={decreaseHandler}>
                    <RemoveRoundedIcon />
                </button>
                <input type="number" id='quantityValue' value={value} />
                <button className={styles.counterOperation} id='inc' type='button' onClick={increaseHandler}>
                    <AddRoundedIcon />
                </button>
            </div>
        </div>
    )
}