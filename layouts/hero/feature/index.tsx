import React from 'react';
import anlyticsImg from '@/assets/card_analytic.jpg';
import analytic360Img from '@/assets/card_360.jpg';
import marketImg from '@/assets/card_market.jpg';
import { Row } from '@nextui-org/react';
import { Fade } from 'react-awesome-reveal';
import Card from './card';

const cardsInfo = [
  {
    title: 'analytics',
    desc: 'Google analytics give you free tools you need to analyze',
    img: anlyticsImg,
  },
  {
    title: 'analytics 360',
    desc: 'Get a complete view of your audience with advanced tools',
    img: analytic360Img,
  },
  {
    title: 'market analysis',
    desc: 'Introducing google marketing platform a unified marketing and analytics',
    img: marketImg,
  },
];
function FeatureSection() {
  return (
    <Row css={{ fw: 'wrap', jc: 'center', '@md': { jc: 'space-between' } }} id="feature">
      <Fade cascade duration={400} triggerOnce>
        {cardsInfo.map((data) => <Card key={data.title} {...data} />)}
      </Fade>
    </Row>
  );
}

export default FeatureSection;
