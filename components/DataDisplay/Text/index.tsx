import React, { ReactNode } from 'react';

import { theme } from '@utils';

import { StyledText, StyledTextProps, FontWeight } from './style';

interface TextProps extends Partial<Omit<StyledTextProps, 'size'>> {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
  align?: 'left' | 'center' | 'right';
}

export default ({
  children,
  variant,
  fill = theme.colors['--default-inverted'],
  weight = theme.typography[variant].weight as FontWeight,
  italic = false,
  bold = false,
}: TextProps): JSX.Element => {
  return (
    <StyledText
      size={theme.typography[variant].size}
      fill={fill}
      weight={weight}
      italic={italic}
      bold={bold}
      as={variant}
    >
      {bold ? <b>{children}</b> : children}
    </StyledText>
  );
};
