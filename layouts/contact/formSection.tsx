import React from 'react';
import {
  Button,
  Card, Col, Input, Spacer, Text,
} from '@nextui-org/react';
import contactImg from '@/assets/contact.jpg';

import { Zoom } from 'react-awesome-reveal';
import Image from 'next/image';

function FormSection() {
  return ( 
    <Card css={{
      p: 0,
      dropShadow: 'none',
      borderRadius: 0,
      h: 400,
      position: 'relative',
    }}
    >
      <Image src={contactImg} objectFit="cover"  alt=''/>

      <Card.Body css={{
        bg: '$primary',
        opacity: 0.9,
        position: 'absolute',
        top: '20%',
        right: 20,
        w: '86%',
        borderRadius: '$lg',
        p: '$15',
        '@md': { w: 450 },
      }}
      >
        <Zoom triggerOnce>
          <Col>
            <Text color="White">Join with our community</Text>
            <Text color="White" h3 css={{ lh: '110%', mr: '$20' }}>
              Get best advertiser in your side pocket
            </Text>
            <Spacer y={1} />
            <Input
              id="email"
              placeholder="Enter your email adress"
              contentRightStyling={false}
              contentRight={(
                <Button auto css={{ bg: 'White' }} id="er">
                  <Text color="primary" b>Subscribe</Text>
                </Button>
            )}
            />
          </Col>
        </Zoom>
      </Card.Body>
    </Card>
  );
}

export default FormSection;
