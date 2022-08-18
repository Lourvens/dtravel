import { Container, ContainerProps } from '@nextui-org/react';
import React from 'react';

interface IProps extends Partial<ContainerProps> {}

function Section({ children, ...rest } : IProps) {
  return (
    <Container as="section" fluid css={{ my: '$36' }} {...rest}>
      {children}
    </Container>
  );
}

export default Section;
