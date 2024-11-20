import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'medium',
  label,
  className = '',
}) => {
  const baseClassName = `dse-switch dse-switch-${size} ${checked ? 'dse-switch-checked' : ''}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label className={`dse-switch-wrapper ${disabled ? 'dse-switch-disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="dse-switch-input"
      />
      <span className={`${finalClassName} ${disabled ? 'dse-switch-disabled' : ''}`}>
        <span className="dse-switch-slider" />
      </span>
      {label && <span className={`dse-switch-label ${disabled ? 'dse-switch-disabled' : ''}`}>{label}</span>}
    </label>
  );
};

export default Switch;