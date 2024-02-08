// src/components/Roadmap.js
import React from 'react';
import styled from 'styled-components';

const RoadmapContainer = styled.section`
  background-color: #f7f9fc;
  padding: 4rem 2rem;
  color: #333;
  text-align: center;
`;

const VersionTitle = styled.h3`
  color: #2a6496;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.75rem;

`;

const TaskList = styled.ul`
  list-style: none;
  padding-left: 1rem;
`;

const TaskItem = styled.li`
  margin-bottom: 0.5rem;
  &:before {
    content: '⚬ ';
    color: #6c757d; // A muted color for the bullet points
  }
`;
const Roadmap = () => (
  <RoadmapContainer>
    <h2>Roadmap</h2>
    <VersionTitle>v0.1 - Initial Setup and Infrastructure</VersionTitle>
    <TaskList>
        <TaskItem>
            Establish Genesis block allocations, including pre-mined coins and community reserves.
        </TaskItem>
        <TaskItem>
            Define block reward emissions schedule, considering long-term sustainability and inflation control.
        </TaskItem>
        <TaskItem>
            Set up initial Mining Pool infrastructure to encourage community mining efforts.
        </TaskItem>
        <TaskItem>
            Develop a Block Explorer for transparent transaction and block verification.
        </TaskItem>
        <TaskItem>
            Implement DNS Names for user-friendly node addressing within the network.
        </TaskItem>
        <TaskItem>
            Improve Landing Page: Enhance design, add dynamic content, and incorporate a clear call-to-action.
        </TaskItem>
    </TaskList>
    <VersionTitle>Pre-launch Preparations</VersionTitle>
    <TaskList>
        <TaskItem>
            Perform thorough security audits on all new features.
        </TaskItem>
        <TaskItem>
            Engage in community outreach and education about the mining process and network participation.
        </TaskItem>
        <TaskItem>
            Set up testnet and invite developers for beta testing to gather feedback and ensure stability.
        </TaskItem>
    </TaskList>
    <VersionTitle>Post v0.1 - Network Initialization</VersionTitle>
    <TaskList>
        <TaskItem>
            Officially start the chain, opening up mining to the public with the aim to decentralize the network further.
        </TaskItem>
        <TaskItem>
            Monitor network performance closely, gather data, and prepare for the first major update based on user feedback and observed network dynamics.
        </TaskItem>
    </TaskList>
    <VersionTitle>v1.0 Update - Establishing Core Functionalities</VersionTitle>
    <TaskList>
        <TaskItem>
            Develop and deploy the Staking Contract with a user-friendly interface for ease of participation.
        </TaskItem>
        <TaskItem>
            Update Miner/Node Validation protocols to include mandatory staking requirements, enhancing network security and commitment.
        </TaskItem>
        <TaskItem>
            Establish a DAO (Decentralized Autonomous Organization) for community governance, allowing stakeholders to propose and vote on key decisions.
        </TaskItem>
        <TaskItem>
            Build and launch bridges to Ethereum, Polygon, and OctaSpace for interoperability and fluid asset transfer.
        </TaskItem>
    </TaskList>
    <VersionTitle>Post v1.0 - Growth and Expansion</VersionTitle>
    <TaskList>
        <TaskItem>
            Continue community engagement, focusing on the growth and decentralization of the network.
        </TaskItem>
        <TaskItem>
            Encourage development of third-party tools and services to enrich the ecosystem.
        </TaskItem>
    </TaskList>
    <VersionTitle>v1.01 Update - Integration with Kubernetes</VersionTitle>
    <TaskList>
        <TaskItem>
            Integrate Kubernetes node management, enabling users to contribute to the network with their computing resources.
        </TaskItem>
        <TaskItem>
            Implement Basic Stack Deployment tools for users to deploy applications on the KubeChain network efficiently.
        </TaskItem>
        <TaskItem>
            Design Basic Dashboards for users to monitor and manage their nodes and applications.
        </TaskItem>
        <TaskItem>
            Roll out Node Updates to implement Kubernetes-based validation, ensuring that the network leverages the full potential of decentralized resource pooling.
        </TaskItem>
    </TaskList>
    <VersionTitle>Post v1.01 - Fostering a Developer Ecosystem</VersionTitle>
    <TaskList>
        <TaskItem>
            Develop SDKs and APIs to facilitate application development on the KubeChain platform.
        </TaskItem>
        <TaskItem>
            Host developer workshops and create extensive documentation to support developers in building on KubeChain.
        </TaskItem>
        <TaskItem>
            Launch a developer grant program to incentivize innovation and use-case exploration within the KubeChain ecosystem.
        </TaskItem>
    </TaskList>
    <VersionTitle>Continuous Improvement Cycle</VersionTitle>
    <TaskList>
        <TaskItem>
            Regularly review and update the roadmap based on technological advancements and community feedback.
        </TaskItem>
        <TaskItem>
            Maintain an open and transparent development process, engaging with the community through forums, social media, and regular updates.
        </TaskItem>
        <TaskItem>
            Monitor industry trends and regulatory developments to ensure KubeChain's strategic alignment with the broader blockchain landscape.
        </TaskItem>
    </TaskList>
    </RoadmapContainer>
);

export default Roadmap;
