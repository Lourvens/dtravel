import { Button, ButtonProps } from '@nextui-org/react';
import React from 'react';

function PrimaryBtn({ children, ...props } : ButtonProps) {
  return (
    <Button auto shadow rounded {...props}>{children}</Button>
  );
}

export default PrimaryBtn;

export function IconBtn({ children, css, ...props }: ButtonProps) {
  return (
    <Button
      css={{
        minWidth: 'auto', ...css,
      }}
      {...props}
      rounded
    >
      {children}
    </Button>
  );
}
