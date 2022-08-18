import React from 'react';
import { IconType } from 'react-icons';
import {
  Col, Row, Spacer, Text,
} from '@nextui-org/react';

type Props = { title: string, Icon: IconType, data: string[] }

function ContactBox({ title, Icon, data } : Props) {
  return (
    <Col>
      <Row css={{
        w: 48,
        h: 48,
        borderRadius: '$rounded',
        color: '$primary',
        jc: 'center',
        ai: 'center',
        dropShadow: '$md',
        boxShadow: '$md',
      }}
      >
        <Icon size={24} />
      </Row>
      <Spacer y={1} />
      <Text b h4 transform="capitalize">{`${title} :`}</Text>
      {data.map((value) => <Text color="gray" key={value}>{value}</Text>)}
    </Col>
  );
}
export default ContactBox;
