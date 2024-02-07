// src/components/HybridConsensusSection.js
import React from 'react';
import styled from 'styled-components';

const ConsensusContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: #333;
`;

const ConsensusTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const ConsensusText = styled.p`
  max-width: 800px;
  margin: auto;
  line-height: 1.6;
  text-align: justify;
`;

const ConsensusSection = () => (
  <ConsensusContainer>
    <ConsensusTitle>Hybrid PoW/PoS Technology</ConsensusTitle>
    <ConsensusText>
      KubeChain introduces a revolutionary consensus mechanism that synergizes the security of Proof of Work with the efficiency and scalability of Proof of Stake. This hybrid approach aims to optimize network integrity, reduce energy consumption, and provide a fair and inclusive mining environment. By requiring miners to stake assets as a prerequisite for mining, KubeChain ensures a more committed and loyal network of participants, enhancing the overall stability and reliability of the blockchain.
    </ConsensusText>
  </ConsensusContainer>
);

export default ConsensusSection;
