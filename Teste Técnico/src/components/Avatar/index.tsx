import React, { ImgHTMLAttributes } from 'react';

import { Container } from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ size, ...props }) => {
  return (
    <Container size={size}>
      <img alt="" {...props} />
    </Container>
  );
};

export default Avatar;
