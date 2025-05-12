import {InputHTMLAttributes} from "react";
import './input.scss'
import classNames from 'classnames'
import {Pattern, Status, WidthBlock} from './enumInput.ts'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string
    status?: Status;
    pattern?: Pattern;
    errorMessage?: string;
    widthBlock?: WidthBlock;
    label?: string,
    name?: string,
    setValues?: any;
}



const Input = (
    {
        value = '',
        status=Status.default,
        pattern=Pattern.email,
        errorMessage='',
        widthBlock,
        label,
        name,
        setValues,
        ...rest
    }:InputProps
) => {


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
            <input
                onChange={(e) => setValues(val=>({...val,[name]: e.target.value}))}
                pattern={pattern}
                value={value}
                className={classesInput}
                {...rest}
            />
            {errorMessage && <span className="error-message">{errorMessage}</span>}
        </div>
    );
};

export default Input;