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
    setValues?: (val: any) => void;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setValues && name) {
            setValues((prevValues: any) => ({ ...prevValues, [name]: e.target.value }));
        }
    };

    return (
        <div className={classesContainer}>
            { label && <label>{label}</label> }
            <input
                onChange={handleChange}
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