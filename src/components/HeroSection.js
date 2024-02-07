// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/kubechainpng.png'; // Ensure the path matches your file structure

const HeroContainer = styled.div`
  background: url(${bannerImage}) no-repeat center center fixed;
  background-size: cover;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.2); // A light overlay to improve contrast
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: #000; // Text color is black
  text-align: center;
  padding: 0 2rem; // Padding to ensure text doesn't touch the edges
`;

const HeroTitle = styled.h1`
  font-size: 8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: black;
`;

const HeroSubtitle = styled.p`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const HeroSection = () => (
  <HeroContainer>
    <Overlay />
    <HeroContent>
      <HeroTitle>Welcome to KubeChain</HeroTitle>
      <HeroSubtitle>The Future of Decentralized Cloud Computing</HeroSubtitle>
    </HeroContent>
  </HeroContainer>
);

export default HeroSection;
