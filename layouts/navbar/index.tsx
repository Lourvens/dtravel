import React from 'react';
import {
  Button,  Link, Row, Text,
} from '@nextui-org/react';
import logo from '@/assets/logo.png';
import PrimaryBtn from '@/components/primarybtn';
import { Fade } from 'react-awesome-reveal';
import styles from './styles';
import Image from 'next/image';

function Navbar() {
  const links = ['home', 'feature', 'about', 'contact'];
  return (
    <Row as="header" justify="space-between" align="center">
      <Fade direction="left" triggerOnce>
        <Row css={styles.row} align="center" gap={2}>
          <Image src={logo} width={32} alt="d-travel logo" />
          <Text as="h1" size="1.5rem" css={styles.title}>D-Agency</Text>
        </Row>
      </Fade>
      <Fade direction="up" cascade delay={200} triggerOnce>
        <Row css={styles.row}>
          {links.map((link) => (
            <Link key={link} css={styles.navlink} href={`#${link}`}>
              {link}
            </Link>
          ))}
        </Row>
      </Fade>
      <Fade direction="right" triggerOnce>
        <Row css={styles.row}>
          <Button auto light size="lg">sing in</Button>
          <PrimaryBtn color="secondary" size="lg">
            Sing Up
          </PrimaryBtn>
        </Row>
      </Fade>
    </Row>
  );
}

export default Navbar;
