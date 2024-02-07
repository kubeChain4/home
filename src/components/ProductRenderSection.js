// src/components/ProductRenderSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
// import Modal from './Modal'; // A component for modal view you would need to create

// Import your images
import multiDash from '../assets/multidashboard.png';
import multiDash2 from '../assets/multidash2kubechain.png';
import multiDash5 from '../assets/multidash5kubechain.png';

const Modal = ({ imageSrc, closeModal }) => (
    <div>
        <div>
            <img src={imageSrc} alt="modal" />
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
);




const ProductContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  color: #333;
`;

const ProductTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProductText = styled.p`
  max-width: 800px;
  margin: auto;
  margin-bottom: 3rem;
  line-height: 1.6;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 240px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Caption = styled.p`
  text-align: center;
`;

const ProductRenderSection = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <ProductContainer>
      <ProductTitle>Platform Interface</ProductTitle>
      <ProductText>
        Explore the intuitive interfaces of KubeChain, showcasing our commitment to providing seamless user experiences across various functionalities of our decentralized cloud computing platform.
      </ProductText>
      <Grid>
        <div>
          <ProductImage src={multiDash} alt="Dashboard" onClick={() => openModal(multiDash)} />
          <Caption>Dashboard Overview</Caption>
        </div>
        <div>
          <ProductImage src={multiDash2} alt="Resource Management" onClick={() => openModal(multiDash2)} />
          <Caption>Resource Management</Caption>
        </div>
        <div>
          <ProductImage src={multiDash5} alt="Community Forum" onClick={() => openModal(multiDash5)} />
          <Caption>Node Management</Caption>
        </div>
      </Grid>
      {modalImage && <Modal imageSrc={modalImage} closeModal={closeModal} />}
    </ProductContainer>
  );
};

export default ProductRenderSection;
