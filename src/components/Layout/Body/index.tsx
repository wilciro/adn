// React
import React from 'react';

// Style
import { Body } from './style';

interface BodyProps {
  children: React.ReactNode;
}

const LayoutBody: React.FC<BodyProps> = ({ children }) => {
  return <Body dark={false}>{children}</Body>;
};

export default LayoutBody;
