import React from 'react';
import {
  Col, Container, Grid, Row, Spacer, Text,
} from '@nextui-org/react';
import { TiPhone } from 'react-icons/ti';
import { BsFillEnvelopeFill } from 'react-icons/bs';

import { Fade } from 'react-awesome-reveal';

import ContactForm from './contactform';
import ContactBox from './contactbox';
import FormSection from './formSection';

function ContactSection() {
  return (
    <Col as="section" >
      <FormSection />
      <Container css={{ my: '$28' }}>
        <Grid.Container justify="space-between" css={{ gap: '$12' }}>
          <Grid md={5}>
            <Col>
              <Fade direction="down" triggerOnce>
                <Text h2 css={{ lh: '120%' }}>Got a project or a partnership in mind?</Text>
                <Spacer y={1} />
                <Row>
                  <ContactBox title="phone" Icon={TiPhone} data={['+509 3200-2463', '+509 3608-3445']} />
                  <ContactBox title="email" Icon={BsFillEnvelopeFill} data={['user@email.com', 'example@domain.cpm']} />
                </Row>
              </Fade>
            </Col>
          </Grid>
          <Grid md={6}>
            <ContactForm />
          </Grid>
        </Grid.Container>
      </Container>
    </Col>
  );
}

export default ContactSection;
