import React from 'react';

import PrimaryBtn from '@/components/primarybtn';
import Section from '@/components/section';
import {
  Container, Link, Row, Text,
} from '@nextui-org/react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

function FooterSection() {
  return (
    <Section as="footer" css={{ mb: '$5' }}>
      <Container
        xs
        css={{
          d: 'flex', ai: 'center', gap: '$12',
        }}
      >
        <Text h2 transform="capitalize" css={{ ta: 'center' }}>
          app is available for free on Google Play & and App Store
        </Text>
        <Text h5 color="gray">
          we&apos;ll help you achieve marketin & business goals
        </Text>
        <Row css={{ gap: '$10' }} justify="center">
          <PrimaryBtn icon={<FaApple />} size="lg">
            App Store
          </PrimaryBtn>
          <PrimaryBtn icon={<FaGooglePlay />} color="secondary" size="lg">
            Google Play
          </PrimaryBtn>
        </Row>
        <Row css={{ gap: '$10', fw: 'wrap', jc: 'center' }}>
          <Link href="#home" underline>Twitter</Link>
          <Link href="#home" underline>Dribble</Link>
          <Link href="#home" underline>Instagram</Link>
          <Link href="#home" underline>Youtube</Link>
          <Link href="#home" underline>Slack</Link>
        </Row>
        <Row css={{ gap: '$10', fw: 'wrap', jc: 'center' }}>
          <Text color="gray" transform="capitalize">2021 all right Reserved</Text>
          <Text color="gray">contact@dagencyweb.com</Text>
          <Text color="gray">(+001) 410292343</Text>
        </Row>
      </Container>
    </Section>
  );
}

export default FooterSection;
