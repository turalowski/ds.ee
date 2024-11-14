import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'text' | 'link';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className: additionalClassName = '',
  ...rest
}) => {
  const baseClassName = 'dse-button';
  const classNames = [
    baseClassName,
    `${baseClassName}--${variant}`,
    `${baseClassName}--${size}`,
    fullWidth ? `${baseClassName}--full-width` : '',
    disabled ? `${baseClassName}--disabled` : '',
    additionalClassName
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classNames}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
