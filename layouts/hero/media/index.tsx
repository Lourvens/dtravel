import React from 'react';
import {
  Col, Row, Spacer, Text,
} from '@nextui-org/react';
import {
  FaAirbnb, FaAmazon, FaStripeS,
} from 'react-icons/fa';

function MediaSection() {
  const businessData = [
    {
      name: 'amazon',
      Icon: FaAmazon,
    },
    {
      name: 'stripe',
      Icon: FaStripeS,
    },
    {
      name: 'airbnb',
      Icon: FaAirbnb,
    },
  ];
  return (
    <Col>
      <Text color="GrayText" size="1.25rem" css={{ ta: 'center' }}>
        Over
        {' '}
        <Text b>32k+</Text>
        {' '}
        software businesses growing with D-agency.
      </Text>
      <Spacer y={2} />
      <Row css={{ gap: '$12', overflow: 'scroll', '@xs': { jc: 'center', gap: '$20', overflow: 'auto' } }}>
        {businessData.map(({ Icon, name }) => (
          <Text
            key={name}
            color="GrayText"
            size="2.5rem"
            transform="capitalize"
            css={{ d: 'flex', alignItems: 'center', gap: '$3' }}
          >
            <Icon fill="currentColor" />
            {name}
          </Text>
        ))}
      </Row>
    </Col>
  );
}

export default MediaSection;
