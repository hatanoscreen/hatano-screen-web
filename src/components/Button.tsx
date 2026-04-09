import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'gold';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, className, ...props }) => {
    const baseClass = `${styles.btn} ${styles[variant]} ${styles[size]}`;
    const combinedClass = className ? `${baseClass} ${className}` : baseClass;

    return (
        <button className={combinedClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
