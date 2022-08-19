import type { NextPage } from 'next'
import Head from 'next/head';

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
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
