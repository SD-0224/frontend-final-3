import styles from './CustomInput.module.css';

export const CustomInput = ({ label, id, type, placeholder, value, onChange, ...props }) => {
    return (
        <div className={styles.inputWrapp}>
            {props.label &&
                <label htmlFor={props.id} className={styles.inputLabel}>
                    {props.label}
                </label>
            }
            <div className={styles.inputContainer}>
                {props.icon &&
                    <>
                        {props.icon}
                    </>
                }
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}