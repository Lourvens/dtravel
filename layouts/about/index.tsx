import React from 'react';
import Section from '@/components/section';
import { HighlightText } from '@/components/text';
import workImg from '@/assets/work_brand.jpg';
import {
  Card, Col, Grid, Row, Spacer, Text,
} from '@nextui-org/react';

import { AiFillMessage, AiFillBell } from 'react-icons/ai';
import { RiFilePaperFill } from 'react-icons/ri';
import PrimaryBtn from '@/components/primarybtn';
import { Fade, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';

function AboutSection() {
  const mockInfo = [
    {
      title: 'First working process',
      Icon: AiFillMessage,
    },
    {
      title: 'Dedicated Team',
      Icon: AiFillBell,
    },
    {
      title: '24/7 Hours Support',
      Icon: RiFilePaperFill,
    },
  ];
  return (
    <Section as="section" id="about">
      <Grid.Container justify="space-between">
        <Grid md={5}>
          <Col>
            <Fade cascade direction="up" triggerOnce>
              <HighlightText>why choose us</HighlightText>
              <Text h2 css={{ lh: '120%' }}>Specialist In aviding clients on financial challenges</Text>
              <Text h4 color="grayText">
                we are  idea generators, goal seekers, challenge-thirsty
                profesionals, creators of unique internet projects. We deliver uncov.
              </Text>
            </Fade>

            <Spacer y={2} />
            <Col>
              {mockInfo.map(({ title, Icon }) => (
                <Card css={{ dropShadow: 'none' }} key={title}>
                  <Card.Body css={{ overflow: 'hidden' }}>
                    <Row>
                      <Zoom triggerOnce>
                        <div>
                          <PrimaryBtn
                            icon={<Icon size={32} />}
                            auto
                            size="lg"
                            css={{ p: '$10', w: 'auto', h: 'auto' }}
                          />
                        </div>
                      </Zoom>
                      <Spacer x={2} />
                      <Col>
                        <Fade direction="down" triggerOnce>
                          <Text h3 b>{title}</Text>
                          <Text color="gray" css={{ lh: '120%' }}>
                            We are idea generators. good seekers,challenge-thirsty
                            profesionals, creators of unique internet projects.
                          </Text>
                        </Fade>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}

            </Col>
          </Col>
        </Grid>
        <Grid xs={0} md={5} css={{ borderRadius: '$lg', overflow: 'hidden' }}>
          <Image src={workImg} objectFit="cover" alt='' />
        </Grid>
      </Grid.Container>
    </Section>
  );
}

export default AboutSection;
