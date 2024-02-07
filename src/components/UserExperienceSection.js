// src/components/UserExperienceSection.js
import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  color: #333;
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ExperienceText = styled.p`
  max-width: 800px;
  margin: auto;
  margin-bottom: 3rem;
  line-height: 1.6;
  text-align: center;
`;

const UserExperienceSection = () => (
  <ExperienceContainer>
    <ExperienceTitle>Exceptional User Experience</ExperienceTitle>
    <ExperienceText>
      KubeChain is dedicated to providing an intuitive and seamless user experience. From easy resource management to transparent transactions, our platform is designed with the user in mind, ensuring that everyone, from novices to experts, can leverage the power of decentralized computing.
    </ExperienceText>
  </ExperienceContainer>
);

export default UserExperienceSection;
