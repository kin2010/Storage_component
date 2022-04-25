import React from 'react';
export interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'h4Primary';
  align: 'center' | 'inherit' | 'justify' | 'left' | 'right';
}
declare class Typography extends React.Component<TypographyProps> {}
export default Typography;
