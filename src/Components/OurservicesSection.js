


import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesData = [
  { title: "Strategic Consulting", description: "Leverage our expertise to create targeted marketing solutions that achieve your goals", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b05aa57426b7ddc9b39d0e_16.svg" },
  { title: "Content Generation", description: "Engage audiences with compelling technical and thought leadership content", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974c2272a4d343c9970_Content%20Generation.svg" },
  { title: "Marketing & Go-to-Market Services", description: "Boost your success with our comprehensive marketing strategies and execution support", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974c2f5e8f4b7fdf672_Marketing%20%26%20Go-to-Market%20Services.svg" },
  { title: "Performance Marketing", description: "Optimizing end-to-end digital marketing campaigns including Web design, SEM, SEO, Social media, and ABM", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974cbe620c976308f28_Performance%20Marketing.svg" },
  { title: "PR & Media Relations", description: "Build brand credibility and expand your brand reach through PR and media relations", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67dc284c1c73e6bf0f95d3b5_icon%203.1.svg" },
  { title: "Graphic Design & Branding", description: "Elevate your brand with expert design: 3D graphics, infographics, and impactful visuals", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974c7dbbb1d46c6d904_Graphic%20Design%20%26%20Branding.svg" },
  { title: "Market Intelligence and Analytics", description: "Leverage data-driven insights to refine strategies, target markets, and drive success", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b169743fcfacb48aa701d8_Market%20Intelligence%20and%20Analytics.svg" },
  { title: "Engineering & Project Management Services", description: "Achieve project success with Anion’s expert project management & engineering resources", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974807867cccd88327c_Engineering%20%26%20Project%20Management%20Services.svg" },
];

const Section = styled.section`
  min-height: 100vh;
  background-color: #34393e;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  font-weight: 400;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid #4a4d52;
  border-left: 1px solid #4a4d52;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  padding: 2rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #4a4d52;
  border-bottom: 1px solid #4a4d52;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover h3 {
    transform: translateY(-1.5rem);
  }

  &:hover p {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover svg {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease;
`;

const Arrow = styled(ArrowRight)`
  color: white;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  color: white;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: transform 0.3s ease;
`;

const Description = styled.p`
  font-size: 18px;
  color: white;
  opacity: 0;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  transition: opacity 0.5s ease;
`;

const BottomSection = styled.div`
  margin-top: 2rem;
`;

const BottomText = styled.p`
  font-size: 17px;
  color: #dcdcdc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ViewButton = styled.button`
  padding: 1rem 2rem;
  font-size: 16px;
  color: white;
  background-color: #2c438a;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #48cbe7;
  }
`;

const OurserviceSection = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/ourservices");
  };

  return (
    <Section>
      <Container>
        <Title>Our Services</Title>

        <Grid>
          {ServicesData.map((service, index) => (
            <Card key={index}>
              <TopRow>
                <Icon
                  src={service.iconSrc}
                  alt={`${service.title} Icon`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/40x40/34393e/ffc74c?text=ICON";
                  }}
                />
                <Arrow size={32} />
              </TopRow>

              <Content>
                <CardTitle>{service.title}</CardTitle>
                <Description>{service.description}</Description>
              </Content>
            </Card>
          ))}
        </Grid>

        <BottomSection>
          <BottomText>
            Anion helps semiconductor, electronics, engineering, and technology
            companies develop and market their organizations through a range of
            services.
          </BottomText>
          <ViewButton onClick={handleViewMore}>View More</ViewButton>
        </BottomSection>
      </Container>
    </Section>
  );
};

export default OurserviceSection;

