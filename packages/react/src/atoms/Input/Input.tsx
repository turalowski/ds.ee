import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ 
  label,
  error,
  ...props
}) => {
  return (
    <div className="dse-input-wrapper">
      {label && (
        <label className="dse-input-label">
          {label}
        </label>
      )}
      <input
        className={`dse-input ${error ? 'dse-input-error' : ''}`}
        {...props}
      />
      {error && (
        <div className="dse-input-error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;