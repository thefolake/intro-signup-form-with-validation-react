import React from 'react';
import './_Input.scss'
import IconError from '../images/icon-error.svg'

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
            <div className={`input-container ${errorMessage ? 'error-border' : ''}`}>
                <input
                    className={className}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    {...restProps}
                />
                {errorMessage && <img src={IconError} alt="error icon" className='error-icon'/>}
            </div>
            <span className="error-message">{errorMessage}</span>
        </>
    )
};

export default Input;