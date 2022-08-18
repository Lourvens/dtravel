import React from 'react';
import Section from '@/components/section';
import { HighlightText } from '@/components/text';
import {
  Card, Col, Grid, Row, Spacer, Text,
} from '@nextui-org/react';
import teamImg from '@/assets/teams.jpg';
import PrimaryBtn, { IconBtn } from '@/components/primarybtn';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

import {
  Fade, Bounce,
} from 'react-awesome-reveal';
import Image from 'next/image';

function TestimonialSection() {
  return (
    <Section>
      <Col>
        <Fade triggerOnce cascade direction="up" delay={300}>
          <HighlightText>Testimonial</HighlightText>
          <Text h2>Don&apos;t believe me check client says</Text>
        </Fade>

      </Col>
      <Grid.Container justify="space-between">
        <Grid md={6}>
          <Card css={{ dropShadow: 'none', overflow: 'visible' }}>
            <Card.Body css={{ p: 0, position: 'relative', overflow: 'visible' }}>
              <Bounce triggerOnce>
                <div>
                  <Image
                    src={teamImg}
                    alt="team workspace"
                  />
                </div>
              </Bounce>

              <PrimaryBtn
                icon={<RiDoubleQuotesL size={36} />}
                auto
                css={{
                  minWidth: 'auto',
                  w: 64,
                  h: 64,
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translate(50%, -50%)',
                }}
              />

            </Card.Body>
            <Card.Footer>
              <Row align="center">
                <Fade triggerOnce cascade damping={0.2}>
                  <IconBtn icon={<BsArrowLeftShort size={24} />} />
                  <Spacer x={1} />
                  <IconBtn ghost icon={<BsArrowRightShort size={24} />} />
                  <Spacer x={2} />
                  <Text color="gray">There are many variations.</Text>
                </Fade>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid md={5}>
          <Col>
            <Fade triggerOnce direction="down" delay={300}>
              <Text color="gray" size="2rem">
                <FaQuoteRight />
              </Text>
              <Spacer y={1} />
              <Text h2 transform="capitalize" css={{ lh: '120%' }}>
                save time managing social media for your business
              </Text>
              <Spacer y={2} />
              <Text h5 color="gray">
                There are many variations passages of lorem ipsum
                available, but the majority have suffered alteration in some
                form, by injected or randomised.
                <br />
                words which don&apos;t look even slightly beleivable if you are going
                to use.
              </Text>
              <Row>
                {Array(5).fill('').map((value, index) => (
                  <Text color="primary" key={`start ${index}`}>
                    <AiFillStar color="currentColor" size={24} />
                  </Text>
                ))}
              </Row>
              <Spacer y={1} />
              <Text h4 b>Mohammad Madhu</Text>
              <Text>Product Designer</Text>
            </Fade>
          </Col>
        </Grid>
      </Grid.Container>
    </Section>
  );
}

export default TestimonialSection;
