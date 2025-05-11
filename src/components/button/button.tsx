
import './button.scss'
import classNames from 'classnames'
import {IconPosition, IconSize, ImageTextGap, ButtonColors, ButtonColorsOutline,ButtonSize, WidthBlock} from './enumButton.ts'

type ButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    disabled?: boolean;
    className?: string;
    attrs?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

type LinkProps = {
    href: string;
    className?: string;
    attrs?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};

type typeProps = {
        styles?: string,
        disabled?: boolean,
        title: string,
        onClick?: () => void,
        icon?: string,
        iconSize?: IconSize,
        gap?: ImageTextGap,
        iconPosition?: IconPosition,
        buttonColors?: ButtonColors,
        buttonColorsOutline?: ButtonColorsOutline,
        buttonSize?: ButtonSize,
        widthBlock?: WidthBlock, } & (ButtonProps | LinkProps);


const Button: React.FC<typeProps>  = ({
                        styles='',
                        icon,
                        iconSize=IconSize.size16,
                        iconPosition=IconPosition.top,
                        gap=ImageTextGap.gap24,
                        buttonColors=ButtonColors.primary,
                        buttonColorsOutline=ButtonColorsOutline.primaryOutline,
                        buttonSize=ButtonSize.m,
                        widthBlock,
                        disabled = false,
                        title,
                        ...attrs}) => {

        const Tag: 'a' | 'button' = attrs.href ? 'a' : 'button';

        let isDisabled

        if (Tag === 'a' && attrs.disabled) {
            isDisabled = 'isDisabled'
        }

        const classes = classNames(
            'btn',
            iconPosition,
            gap,
            styles,
            buttonColors,
            buttonColorsOutline,
            buttonSize,
            isDisabled,

        );


    const onClickAction = (e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (disabled) {
            e.preventDefault()
        } else {
            return onclick && onclick(e)
            }
        }


    return (
            <Tag {...attrs} className={classes} disabled={disabled} onClick={onClickAction} >
                {icon && <img className={iconSize}  src={icon}   alt=""/> }
                <span>{title}</span>
            </Tag>
    );
    };

export default Button;