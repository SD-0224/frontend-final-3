import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styles from './QuantitiyCounter.module.css';

export const QuantityCounter = () => {
    return (
        <div className={styles.container}>
            <span className={styles.quantityText}>Quantity:</span>
            <div className={styles.operations}>
                <button id='dec' type='button'>
                    <RemoveRoundedIcon />
                </button>
                <input type="number" />
                <button id='inc' type='button'>
                    <AddRoundedIcon />
                </button>
            </div>
        </div>
    )
}