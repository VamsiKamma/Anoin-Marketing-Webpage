import React from "react";
import styled from "styled-components";

// Styled Components

const Section = styled.section`
  padding: 4rem 1rem;
  background: var(--Background-one, #ece9e3);

  @media (min-width: 640px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 5rem;
  }
`;

const Container = styled.div`
  max-width: 1900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 400;
  color: #2c438a;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  border: 1px solid #d1d5db;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid #d1d5db;
  }

  @media (min-width: 768px) {
    & > div {
      border-bottom: none;
      border-right: 1px solid #d1d5db;
    }

    & > div:last-child {
      border-right: none;
    }
  }
`;

const Card = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: #f9fafb;
    transform: translateY(-4px);
  }

  @media (min-width: 1024px) {
    padding: 3rem 1.5rem;
  }
`;

const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    font-size: 1.05rem;
  }
`;

// Component
const ServiceCard = ({ iconSrc, title, description }) => (
  <Card>
    <IconWrapper>
      <img src={iconSrc} alt={`${title} Icon`} />
    </IconWrapper>
    <CardTitle>{title}</CardTitle>
    <Description>{description}</Description>
  </Card>
);

const WhoWeServeSection = () => {
  const serviceData = [
    {
      iconSrc:
        "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb47811444080edaba3_IC%20Companies.svg",
      title: "Semiconductor Companies",
      description: "Fab and fabless chip providers and distributors",
    },
    {
      iconSrc:
        "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb453524a4f6c58a2bf_Edge%20manufacturing.svg",
      title: "Edge Infrastructure Solution Providers",
      description: "Server, storage, networking, and cloud",
    },
    {
      iconSrc:
        "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb4c07f85b1eeee56ca_Boards%20and%20PC.svg",
      title: "Board and PC Suppliers",
      description: "SOMs, SBCs, modules, and embedded PCs",
    },
    {
      iconSrc:
        "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb4a1130eb007895f90_Software%20vendors%20new.svg",
      title: "Software Providers",
      description:
        "Operating systems, security, and application-level solutions",
    },
  ];

  return (
    <Section>
      <Container>
        <Title>Who We Serve</Title>
        <Grid>
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhoWeServeSection;
