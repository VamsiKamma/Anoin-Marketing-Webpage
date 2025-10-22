

import React, { useState } from "react";
import styled from "styled-components";
import FooterSection from "./FooterSection";

// ================== Styled Components ==================

const SectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--Background-one, #ece9e3);
  padding: 8rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Grotesk", sans-serif;

  @media (max-width: 767px) {
    padding: 7rem 1rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 6rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 9rem 0rem;
  }
`;

// Wrapper to align tabs + description
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;

  @media (min-width: 768px) {
    padding-left: 6%;
  }

  @media (min-width: 1280px) {
    padding-left: 7%;
  }

  @media (max-width: 767px) {
    align-items: center;
    padding-left: 0;
    text-align: center;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  border-bottom: 1.5px solid #b6c4d3;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    border-bottom: none;
    gap: 0.8rem;
  }
`;

const Tab = styled.div`
  flex: 1;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#48cbe7" : "#2c438a")};
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 767px) {
    text-align: center;
    border-bottom: 1.5px solid #b6c4d3;
    width: 100%;
    padding-bottom: 0.6rem;
  }
`;

const UnderlineContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  height: 1.5px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const LeftUnderline = styled.div`
  flex: 1;
  background-color: ${(props) => (props.active ? "#ffbc4d" : "#ffbc4d")};
  transition: background-color 0.3s ease;
`;

const RightUnderline = styled.div`
  flex: 1;
  background-color: ${(props) => (props.active ? "#b6c4d3" : "#b6c4d3")};
  transition: background-color 0.3s ease;
`;

const Description = styled.p`
  color: #444b46;
  line-height: 1.7;
  text-align: left;
  max-width: 1200px;
  margin-top: 3.5rem;
  font-size: 1rem;
  letter-spacing: 0.3px;

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 767px) {
    text-align: center;
    padding: 0 20px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 1400px;
  padding: 110px 5%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 110px 7%;
  }

  @media (max-width: 767px) {
    padding: 60px 20px;
    grid-template-columns: 1fr;
  }
`;

const CardWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 20px;
  }
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: 768px) {
    height: 250px;
  }
`;

const CardContent = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  margin-top: -55px;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #121619;
  font-weight: 500;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #444b46;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

// ================== Data Arrays ==================

const technologyAreas = [
  {
    title: "Processing",
    description: "GPUs, processors (x86 and Arm), FPGAs, and SoCs",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aac_processing.png",
  },
  {
    title: "Analog and Power",
    description:
      "Signal chain components including sensors, signal conditioners, isolation, data converters, and power discretes/chips/modules",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aae_Analog.png",
  },
  {
    title: "High-Power",
    description: "Wide-bandgap (GaN and SiC) and high-power semiconductors",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aad_high%20power.png",
  },
  {
    title: "Connectivity",
    description:
      "Wired (Ethernet, 10BASE-T, and other industrial protocols) and wireless connectivity (Wi-Fi, Bluetooth, and 5G)",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab1_connectivity.png",
  },
  {
    title: "Cyber Security",
    description:
      "Hardware (root-of-trust, trusted platform module, authentication, etc.) and software-based solutions to ensure data security at rest and in motion",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab3_cyber%20security.png",
  },
  {
    title: "Operating Systems & Software",
    description:
      "Embedded commercial and open-source operating systems, development frameworks, and applications software",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aaf_operating%20system.png",
  },
  {
    title: "Edge-to-Data Center",
    description: "Industrial PCs and gateways, servers, and storage appliances",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab0_edge%20to%20datacenter.png",
  },
  {
    title: "Services",
    description: "Engineering, supply chain, manufacturing, and integration",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab2_services.png",
  },
];

const endMarketAreas = [
  {
    title: "Artificial Intelligence at the Edge",
    description:
      "Machine vision, generative AI, autonomous robotics, and digital twins",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aba_Artificial%20Intelligence%20at%20the%20Edge.png",
  },
  {
    title: "Clean Energy Solutions",
    description:
      "EVs, charging infrastructure, energy storage, battery management systems, and smart buildings and homes",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab8_Clean%20Energy%20Solutions.png",
  },
  {
    title: "Industrial Automation",
    description: "Robotics and digital factories",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52abb_Industrial%20Automation.png",
  },
  {
    title: "Transportation",
    description: "Automotive and connected logistics",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab5_Enterprise.png",
  },
  {
    title: "Healthcare",
    description:
      "Medical devices, wearables, diagnostics, and healthcare infrastructure",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab7_Healthcare.png",
  },
  {
    title: "Enterprise",
    description: "Datacenter, on-premises compute and storage, and cloud",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab5_Enterprise.png",
  },
  {
    title: "Security",
    description:
      "Hardware and software cybersecurity solutions, and physical security",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab6_Security.png",
  },
  {
    title: "Retail",
    description:
      "Connected retail, digital signage, and warehouse management",
    imageUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab4_Retail.png",
  },
];

// ================== Components ==================

const Card = ({ data }) => (
  <CardWrapper>
    <ImageWrapper>
      <img
        src={data.imageUrl}
        alt={data.title}
        onError={(e) => {
          e.target.src =
            "https://placehold.co/400x250/E5E7EB/4B5563?text=Image+Error";
        }}
      />
    </ImageWrapper>
    <CardContent>
      <CardTitle>{data.title}</CardTitle>
      <CardDescription>{data.description}</CardDescription>
    </CardContent>
  </CardWrapper>
);

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState("tech");
  const areas = activeTab === "tech" ? technologyAreas : endMarketAreas;

  return (
    <SectionContainer>
      <ContentWrapper>
        <TabsContainer>
          <Tab active={activeTab === "tech"} onClick={() => setActiveTab("tech")}>
            Our Technology Expertise
          </Tab>
          <Tab
            active={activeTab === "market"}
            onClick={() => setActiveTab("market")}
          >
            Our End Market Expertise
          </Tab>
        </TabsContainer>

        <UnderlineContainer>
          <LeftUnderline active={activeTab === "tech"} />
          <RightUnderline active={activeTab === "market"} />
        </UnderlineContainer>

        <Description activeTab={activeTab}>
          {activeTab === "tech"
            ? "Many of our team members are engineers and marketing communication experts with extensive experience in both semiconductor and technology fields. This expertise spans the full spectrum of technologies in the field of semiconductors, embedded boards, edge infrastructure, and software."
            : "At Anion Marketing, we work on projects across a diverse range of industries and applications. This wide-ranging experience allows us to bring a unique perspective to every project, ensuring we can effectively tailor marketing strategies to your specific needs."}
        </Description>
      </ContentWrapper>

      <CardsGrid>
        {areas.map((area, index) => (
          <Card key={index} data={area} />
        ))}
      </CardsGrid>

      <FooterSection />
    </SectionContainer>
  );
};

export default ExpertiseSection;

