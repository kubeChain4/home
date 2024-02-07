// src/components/SecurityTrustSection.js
import React from 'react';
import styled from 'styled-components';

const SecurityContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: #333;
`;

const SecurityTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const SecurityText = styled.p`
  max-width: 800px;
  margin: auto;
  margin-bottom: 3rem;
  line-height: 1.6;
  text-align: center;
`;

const SecurityTrustSection = () => (
  <SecurityContainer>
    <SecurityTitle>Security and Trust</SecurityTitle>
    <SecurityText>
      Security is paramount in decentralized systems. KubeChain leverages advanced cryptographic techniques to ensure data integrity and transaction security. By requiring miners to stake assets, we foster trust and commitment within our network, further securing the platform against malicious activities.
    </SecurityText>
  </SecurityContainer>
);

export default SecurityTrustSection;
