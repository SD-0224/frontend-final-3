import styles from './CustomInput.module.css';

export const CustomInput = ({ ...props }) => {
    return (
        <div className={styles.input_wrapp}>
            {props.label &&
                <label for={props.name} className={styles.input_label}>
                    {props.label}
                </label>
            }
            <div className={styles.input_container}>
                {props.icon &&
                    <>
                        {props.icon}
                    </>
                }
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                />
            </div>
        </div>
    )
}