import type { NextPage } from 'next'

import { Container, NextUIProvider } from '@nextui-org/react';
import theme from '@/common/theme';
import Navbar from '@/layouts/navbar';
import HeroSection from '@/layouts/hero';
import AboutSection from '@/layouts/about';
import TestimonialSection from '@/layouts/testimonials';
import ContactSection from '@/layouts/contact';
import FooterSection from '@/layouts/footer';

const Home: NextPage = () => {
  return (
    <NextUIProvider theme={theme}>
      <Container lg css={{ my: '$10', p: 0 }}>
        <Container lg>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <TestimonialSection />
        </Container>
        <ContactSection />
        <FooterSection />
      </Container>
    </NextUIProvider>)
}

export default Home
import * as React from 'react';

// 1. import `NextUIProvider` component