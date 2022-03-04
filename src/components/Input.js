import React from 'react';
import './_Input.scss'

const Input = ({
                   className,
                   placeholder,
                   type,
                   errorMessage,
                   value,
                   onChange,
                   ...restProps
}) => {
    return (
        <>
            <div className='input-container'>
                <input
                    className={className}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    {...restProps}
                />
                {/*{errorMessage && <img src="../images/icon-error.svg" alt="error icon"/>}*/}
            </div>
            <span className="error-message">{errorMessage}</span>
        </>
    )
};

export default Input;