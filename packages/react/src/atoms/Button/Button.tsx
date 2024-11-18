import React from 'react';

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onClick, 
  variant = 'primary',
  disabled = false,
  className = '',
  children,
  ...rest
}) => {
  const buttonClassName = `dse-button dse-button-${variant} ${className}`.trim();

  return (
    <button 
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      title={title}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;