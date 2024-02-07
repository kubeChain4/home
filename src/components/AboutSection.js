// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const AboutTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: auto;
  line-height: 1.6;
`;

const AboutSection = () => (
  <AboutContainer>
    <AboutTitle>About KubeChain</AboutTitle>
    <AboutText>
      KubeChain revolutionizes the way we think about blockchain and cloud computing. By leveraging a hybrid consensus mechanism and integrating Kubernetes for decentralized resource management, KubeChain offers unparalleled security, scalability, and efficiency. Join us as we build the future of decentralized cloud computing.
    </AboutText>
  </AboutContainer>
);

export default AboutSection;
