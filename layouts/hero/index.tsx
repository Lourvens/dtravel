import React from 'react';
import banner from '@/assets/social_media.jpg';
import mask from '@/assets/mask.svg';
import { BsPlayFill } from 'react-icons/bs';

import {
  Col, Row, Spacer, Text, Grid, Link,
} from '@nextui-org/react';

import PrimaryBtn from '@/components/primarybtn';
import Section from '@/components/section';
import { HighlightText } from '@/components/text';
import { Bounce, Fade } from 'react-awesome-reveal';
import FeatureSection from './feature';
import MediaSection from './media';
import styles from './styles';
import Image from 'next/image';
const maskUrl = () => import('@/assets/mask.svg')
function HeroSection() {
  return (
    <Section css={{ mt: '$20' }}>
      <Grid.Container justify="space-between">
        <Grid md={4}>
          <Col>
            <Fade triggerOnce>
              <HighlightText>
                A trusted digital agency
              </HighlightText>
            </Fade>

            <Text css={styles.heroTitle} b h3>
              <Fade direction="up" duration={500} triggerOnce>
                <span>
                  Quality digital services you really want!
                </span>
              </Fade>
            </Text>
            <Text size={18} color="GrayText" h1>
              <Fade triggerOnce direction='up'>
                <span>
                  We are delivering top level digital services with our
                  best experienced team, just get started with us.
                </span>
              </Fade>
            </Text>
            <Spacer y={2} />
            <Row css={{ gap: '$10' }}>
              <Fade cascade direction="up" delay={400} triggerOnce>
                <PrimaryBtn size="lg"> Get started </PrimaryBtn>
                <Row align="center" css={{ gap: '$4' }}>
                  <PrimaryBtn size="lg" color="secondary" icon={<BsPlayFill size={24} />} />
                  <Text weight="semibold">How its work</Text>
                </Row>
              </Fade>
            </Row>
            <Spacer y={1} />
            <Fade triggerOnce>
              <div>
                <Row align="center" css={{ gap: '$3' }}>
                  <Text>Already a member ?</Text>
                  <Link href="#home" color="text" css={{ fontWeight: '$bold' }}>Sign in.</Link>
                </Row>
              </div>
            </Fade>
          </Col>
        </Grid>
        <Grid md={6}>
          <Bounce delay={1000} triggerOnce>
            <Image
              src={banner}
              style={{
                borderRadius: 10, 
                maskImage: 'url(/mask.svg)',
                WebkitMaskImage: 'url(/mask.svg)',
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%'
              }}
              alt="hero section img"
            />
          </Bounce>
        </Grid>
      </Grid.Container>
      <MediaSection />
      <FeatureSection />
    </Section>
  );
}

export default HeroSection;
