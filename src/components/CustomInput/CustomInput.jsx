import styles from './CustomInput.module.css';

export const CustomInput = ({ label, id, type, placeholder, value, onChange, icon, ...props }) => {
    return (
        <div className={styles.inputWrapp}>
            {label &&
                <label htmlFor={id} className={styles.inputLabel}>
                    {label}
                </label>
            }
            <div className={styles.inputContainer}>
                {icon &&
                    <>
                        {icon}
                    </>
                }
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}