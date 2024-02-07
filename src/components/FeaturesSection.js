// src/components/FeaturesSection.js
import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const FeatureTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FeatureItem = styled.div`
  flex-basis: calc(33.333% - 2rem);
  background: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureHeading = styled.h3`
  margin-top: 0;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
`;

const FeaturesSection = () => (
  <FeaturesContainer>
    <FeatureTitle>Key Features</FeatureTitle>
    <FeatureList>
      <FeatureItem>
        <FeatureHeading>Hybrid Consensus</FeatureHeading>
        <FeatureDescription>Combines the security of PoW with the efficiency of PoS for enhanced network integrity.</FeatureDescription>
      </FeatureItem>
      <FeatureItem>
        <FeatureHeading>Decentralized Computing</FeatureHeading>
        <FeatureDescription>Rent out unused computing resources or access additional capacity on-demand.</FeatureDescription>
      </FeatureItem>
      <FeatureItem>
        <FeatureHeading>Resource Pooling</FeatureHeading>
        <FeatureDescription>Kubernetes-driven resource management ensures optimal utilization of computing power.</FeatureDescription>
      </FeatureItem>
    </FeatureList>
  </FeaturesContainer>
);

export default FeaturesSection;
