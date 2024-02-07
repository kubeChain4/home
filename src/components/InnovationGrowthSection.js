// src/components/InnovationGrowthSection.js
import React from 'react';
import styled from 'styled-components';

const GrowthContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #e8effa;
  color: #333;
`;

const GrowthTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const GrowthText = styled.p`
  max-width: 800px;
  margin: auto;
  margin-bottom: 3rem;
  line-height: 1.6;
  text-align: center;
`;

const GrowthList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  &:before {
    content: '🚀'; // Using a rocket emoji to symbolize innovation and growth
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const InnovationGrowthSection = () => (
  <GrowthContainer>
    <GrowthTitle>Innovation and Growth</GrowthTitle>
    <GrowthText>
      KubeChain is not just a platform; it's a growing ecosystem driven by innovation and the shared success of its users. We're constantly exploring new frontiers in blockchain and cloud computing to bring you the most advanced solutions.
    </GrowthText>
    <GrowthList>
      <ListItem>
        Ongoing research and development in decentralized technologies.
      </ListItem>
      <ListItem>
        Regular updates with the latest security and functionality enhancements.
      </ListItem>
      <ListItem>
        A roadmap driven by community feedback and industry trends.
      </ListItem>
      <ListItem>
        Collaborations with leading tech companies and academic institutions.
      </ListItem>
      <ListItem>
        Commitment to user empowerment through educational resources and support.
      </ListItem>
    </GrowthList>
  </GrowthContainer>
);

export default InnovationGrowthSection;
