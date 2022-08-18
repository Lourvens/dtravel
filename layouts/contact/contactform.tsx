import PrimaryBtn from '@/components/primarybtn';
import {
  Col, Input, InputProps, Row, Spacer,
} from '@nextui-org/react';
import React from 'react';

type Props = Partial<InputProps>

function UiInput({ ...props }: Props) {
  return (
    <Input
      {...props}
      color="primary"
      width="100%"
      underlined
    />
  );
}

function ContactForm() {
  return (
    <Col>
      <Row css={{ gap: '$15' }}>
        <UiInput labelPlaceholder="Enter your name" id='form_name' />
        <UiInput labelPlaceholder="Your phone" id='form_phone'/>
      </Row>
      <Spacer y={2} />
      <UiInput labelPlaceholder="Your E-mail" id='form_email'/>
      <Spacer y={2} />
      <UiInput labelPlaceholder="Tell about your project" id='form_msg'/>
      <Spacer y={2} />
      <Row justify="flex-end">
        <PrimaryBtn size="lg">Send a message</PrimaryBtn>
      </Row>
    </Col>
  );
}

export default ContactForm;
