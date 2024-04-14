import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styles from './QuantitiyCounter.module.css';
import { useEffect, useState, useRef } from 'react';

export const QuantityCounter = ({ quantityValue = 0 }) => {
    const [value, setValue] = useState(quantityValue);
    const decreseButton = useRef();
    const increaseHandler = () => {
        setValue((value) => value + 1);
    }

    const decreaseHandler = () => {
        setValue((value) => value - 1);
    }

    useEffect(() => {
        if (!value) {
            decreseButton.current.style.pointerEvents = "none";
            decreseButton.current.style.opacity = "0.2";
        } else {
            decreseButton.current.style.pointerEvents = "auto";
            decreseButton.current.style.opacity = "1";
        }
    }, [value])


    return (
        <div className={styles.container}>
            <span className={styles.quantityText}>Quantity:</span>
            <div className={styles.operations}>
                <button className={styles.counterOperation} type='button' onClick={decreaseHandler} ref={decreseButton}>
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