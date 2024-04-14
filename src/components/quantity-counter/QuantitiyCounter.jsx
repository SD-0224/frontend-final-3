import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export const QuantityCounter = () => {
    return (
        <div>
            <span>Quantity:</span>
            <div>
                <button id='inc'>
                    <AddRoundedIcon />
                </button>
                <input type="number" />
                <button id='dec'>
                    <RemoveRoundedIcon />
                </button>
            </div>
        </div>
    )
}