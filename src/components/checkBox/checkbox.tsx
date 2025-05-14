import './checkbox.scss'
import {useState} from "react";
import classNames from "classnames";


//своя картинка чекбокса
interface CheckboxProps {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    id: string;
    iconCheckBox?: string;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
                                               checked = false,
                                               onChange,
                                                id,
                                               disabled,
                                              } :CheckboxProps) => {

    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onChange(newCheckedState);
    };



    const classes = classNames(
        'checkbox-input',
    );


    return (
        <input
            id={id}
            className={classes}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            disabled={disabled}
        />
    );
};

export default Checkbox;