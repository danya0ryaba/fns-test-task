import type { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

export enum ButtonTheme {
    primary = 'primary',
    secondary = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    onClick?: () => void;
    to?: string;
}

export const Button: FC<ButtonProps> = ({
    className = '',
    theme = ButtonTheme.primary,
    onClick,
    to,
    children,
    ...otherProps
}) => {

    return (
        <button
            className={`${styles.Button} ${className} ${styles[theme]}`}
            {...otherProps}
            onClick={onClick}
        >
            {children}
        </button>
    );
};