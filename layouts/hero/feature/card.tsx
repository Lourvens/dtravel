import React from 'react';
import {
  Card as UiCard, Col, Link, Text,
} from '@nextui-org/react';
import { BsArrowRight } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string,
  desc: string,
  img: StaticImageData
}
function Card({ title, desc, img }: Props) {
  return (
    <UiCard css={{
      h: 350, w: 400, dropShadow: 'none',
    }}
    >
      <UiCard.Body css={{ borderRadius: '20%' }}>
        <Image src={img} alt="card image"/>
      </UiCard.Body>

      <UiCard.Footer>
        <Col>
          <Fade cascade direction="down" triggerOnce>
            <Text h3 transform="capitalize">{title}</Text>
            <Text h5>{desc}</Text>
            <span>
              <Link
                href="#home"
                css={{
                  d: 'flex',
                  alignItems: 'center',
                  gap: '$3',
                  '&:hover': { gap: '$5' },
                }}
              >
                learn more
                {' '}
                <BsArrowRight />
              </Link>
            </span>
          </Fade>
        </Col>
      </UiCard.Footer>
    </UiCard>
  );
}

export default Card;
