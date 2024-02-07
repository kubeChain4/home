// src/components/ContactSection.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f0f0f0;
`;

const ContactTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ContactSection = () => (
  <ContactContainer>
    <ContactTitle>Get in Touch</ContactTitle>
    <Form>
      <Input type="text" placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <Textarea placeholder="Your Message" rows="4"></Textarea>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  </ContactContainer>
);

export default ContactSection;
