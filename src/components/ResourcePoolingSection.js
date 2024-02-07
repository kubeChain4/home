// src/components/ResourcePoolingSection.js
import React from 'react';
import styled from 'styled-components';

const PoolingContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #edf5f7;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center; // Centered content
`;

const PoolingTitle = styled.h2`
  font-size: 2.5rem; // Larger font size for title
  margin-bottom: 1rem; // Reduced margin for a tighter layout
`;

const PoolingSubtitle = styled.h3`
  font-size: 1.5rem; // Subtitle for additional emphasis
  color: #555;
  margin-bottom: 3rem; // More whitespace before the list starts
`;

const PoolingText = styled.p`
  max-width: 800px;
  margin-bottom: 3rem; // Added margin for more space after the text
  line-height: 1.6;
  text-align: center; // Centered text for a symmetrical design
`;

const PoolingList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px; // Max width to control the width of list items
  margin: auto; // Center list in the container
`;

const ListItem = styled.li`
  font-size: 1.1rem; // Slightly larger font for list items
  margin-bottom: 1.5rem; // More space between list items
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '✔️'; // Keeping the checkmark for simplicity, but consider using an icon
    margin-right: 0.8rem; // More space between the icon and text
    color: #4CAF50;
    font-size: 1.2rem; // Larger icon for visibility
  }
`;


const ResourcePoolingSection = () => (
    <PoolingContainer>
        <PoolingTitle>Advanced Resource Pooling</PoolingTitle>
        <PoolingText>
            At the heart of KubeChain is an advanced resource pooling system that unites computing power from across the network, transcending the limitations of individual hosts. By aggregating resources, KubeChain enables a level of computational power and flexibility that standalone machines cannot match.
        </PoolingText>
        <PoolingList>
            <ListItem>
                <strong>Scalability:</strong> Dynamically scale your resources up or down based on your workload requirements.
            </ListItem>
            <ListItem>
                <strong>Cost-Effective:</strong> Only pay for what you use, and access bulk computing resources without the need for capital investment in hardware.
            </ListItem>
            <ListItem>
                <strong>High Availability:</strong> Resources are distributed across the network, minimizing the risks associated with single points of failure.
            </ListItem>
            <ListItem>
                <strong>Performance:</strong> Pooling allows for the distribution of complex tasks across multiple machines, resulting in faster processing and turnaround.
            </ListItem>
            <ListItem>
                <strong>Optimization:</strong> Kubernetes-driven resource management ensures optimal utilization of computing power, reducing waste and inefficiency.
            </ListItem>
            <ListItem>
                <strong>Environmental Impact:</strong> Leverage a greener computing model that maximizes energy efficiency and helps reduce overall carbon emissions.
            </ListItem>
            <ListItem>
                <strong>Redundancy and Reliability:</strong> Benefit from built-in redundancy, ensuring high reliability and uptime for your services.
            </ListItem>
            <ListItem>
                <strong>Load Balancing:</strong> Take advantage of intelligent load balancing that distributes workload evenly, maintaining system health and performance.
            </ListItem>
            <ListItem>
                <strong>Global Reach:</strong> Access a geographically distributed resource pool, minimizing latency and accelerating content delivery.
            </ListItem>
            <ListItem>
                <strong>Community Support: </strong> Join an ecosystem that thrives on mutual support, shared growth
            </ListItem>
            <ListItem>
                <strong>Future-Proof Technology:</strong> Embrace a platform that's committed to continuous innovation and adaptability, ensuring it remains relevant and valuable in the long term.
            </ListItem>

        </PoolingList>
    </PoolingContainer>
);

export default ResourcePoolingSection;
