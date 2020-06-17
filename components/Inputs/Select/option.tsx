import styled from 'styled-components';
import styledTheme from 'styled-theming';

import { theme } from '@utils';

const color = {
  border: styledTheme('mode', {
    dark: `1px solid ${theme.colors['--grey'].light}`,
  }),
  shadow: styledTheme('mode', {
    light: '0 8px 30px rgba(0, 0, 0, 0.12)',
    dark: '0 8px 30px rgba(0, 0, 0, 0.18)',
  }),
  hover: styledTheme('mode', {
    light: '#ececec',
    dark: 'rgba(76,76,76,0.25)',
  }),
  text: styledTheme('mode', theme.colors['--grey']),
};

export const StyledSelectOptionContainer = styled.div`
  // Style
  border-radius: ${theme.layout.radius};
  border: ${color.border};
  box-shadow: ${color.shadow};

  // Layout
  margin-top: calc(${theme.layout.gap} * 2);
`;

interface Props {
  isFirst?: boolean;
  isLast?: boolean;
}

export const StyledSelectOption = styled.div<Props>`
  // Style
  cursor: pointer;
  border-radius: ${({ isFirst, isLast }): string =>
    (isFirst && `${theme.layout.radius} ${theme.layout.radius} 0 0`) ||
    (isLast && `0 0 ${theme.layout.radius} ${theme.layout.radius}`) ||
    'none'};

  // Text
  color: ${color.text};
  font-size: ${theme.typography.small.size};

  // Layout
  padding: calc(${theme.layout.gap} * 2);

  // Interaction
  :hover {
    background: ${color.hover};
  }
`;
