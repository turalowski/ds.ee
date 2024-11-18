import React from 'react';
import { FontSize } from '@ds.ee/foundation';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';

export interface TypographyProps {
  variant?: TypographyVariant;
  size?: keyof typeof FontSize;
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  size,
  children,
  className = '',
}) => {
  const getDefaultSizeForVariant = (variant: TypographyVariant): keyof typeof FontSize => {
    switch (variant) {
      case 'h1':
        return 'xl';
      case 'h2':
        return 'lg';
      case 'h3':
        return 'base';
      case 'h4':
        return 'base';
      case 'h5':
        return 'sm';
      case 'h6':
        return 'xs';
      case 'caption':
        return 'xs';
      default:
        return 'base';
    }
  };

  const finalSize = size || getDefaultSizeForVariant(variant);
  const baseClassName = `dse-typography dse-typography-${variant} dse-text-${finalSize}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  const Component = variant.match(/^h[1-6]$/) ? variant : 'p';

  return (
    <Component className={finalClassName}>
      {children}
    </Component>
  );
};

export default Typography;