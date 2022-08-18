import { Text } from '@nextui-org/react';
import React from 'react';

type props = {
  children: string
}
export function HighlightText({ children }: props) {
  return (
    <Text
      color="primary"
      weight="medium"
      size={20}
    >
      {children}
    </Text>
  );
}

export const name = '';
