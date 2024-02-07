// src/components/Donations.js
import React from 'react';
import styled from 'styled-components';

const DonationsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
`;

const AddressContainer = styled.div`
  margin-top: 15px;
`;

const Address = styled.p`
  background-color: #fff;
  color: #333;
  padding: 10px;
  border-radius: 4px;
  word-break: break-all;
`;

const Donations = () => {
  return (
    <DonationsContainer>
      <Title>Support Our Project</Title>
      <p>Consider donating to help us keep the project alive and evolving. You can donate using the following cryptocurrency addresses:</p>
      <AddressContainer>
        <h3>Bitcoin (BTC)</h3>
        <Address>YourBTCAddressHere</Address>
        <h3>Ethereum (ETH)</h3>
        <Address>YourETHAddressHere</Address>
      </AddressContainer>
    </DonationsContainer>
  );
};

export default Donations;
