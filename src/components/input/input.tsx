import {InputHTMLAttributes, ChangeEvent, useState} from "react";
import './input.scss'
import classNames from 'classnames'
import {Pattern, Status, WidthBlock} from './enumInput.ts'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string
    status?: Status;
    pattern?: Pattern;
    errorMessage?: string;
    widthBlock?: WidthBlock;
    label?: string
}



const Input = (
    {
        value = '',
        status=Status.default,
        pattern=Pattern.email,
        errorMessage='',
        widthBlock,
        label,
        ...rest
    }:InputProps
) => {

    const [valueDef, setValueDef] = useState(value)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValueDef(e.target.value);
    }
    
    const classesInput = classNames(
        'input',
        status,
        errorMessage && Status.error
    );

    const classesContainer = classNames(
        'input-container',
        widthBlock
    )


    return (
        <div className={classesContainer}>
            { label && <label>{label}</label> }
            <input onChange={(e) => handleChange(e)} pattern={pattern} value={valueDef}
                   className={classesInput}  {...rest}   />
            {errorMessage && <span className="error-message">{errorMessage}</span>}
        </div>
    );
};

export default Input;