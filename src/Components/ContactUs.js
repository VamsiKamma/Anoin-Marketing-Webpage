


import React from "react";
import styled from "styled-components";

const MarketingPoints = [
  {
    title: "Be Found",
    description: "Optimize for AI-based search and content platforms.",
  },
  {
    title: "Go Multi-Channel",
    description:
      "Integrate audience behavior insights with proven marketing strategies.",
  },
  {
    title: "Stay Authentic",
    description:
      "Craft a brand voice that stands out in an AI-saturated world.",
  },
];

const ContactUs = () => {
  const graphicUrl =
    "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c712d62c21396b2e1bc3d6_Ai%20Animatiion%20home%20page%20(2)%20(1)%201.svg";

  return (
    <Section>
      <InnerWrapper>
        <ContentGrid>
          {/* Right Column - Image */}
          <RightColumn>
            <GraphicImage
              src={graphicUrl}
              alt="Abstract AI Network Graphic"
            />
          </RightColumn>

          {/* Left Column - Text */}
          <LeftColumn>
            <Headline>
              Stay Visible and Authentic in the Age of AI with Anion Marketing
            </Headline>
            <Description>
              AI is reshaping marketing — Anion Marketing helps you stay ahead
              by optimizing AI-driven search visibility, multi-channel
              strategies, and authentic brand messaging.
            </Description>

            <BulletList>
              {MarketingPoints.map((point, index) => (
                <li key={index}>
                  <strong>{point.title}</strong>
                  <span> — {point.description}</span>
                </li>
              ))}
            </BulletList>

            <ButtonWrapper>
              <CTAButton onClick={() => console.log("Contact Us Clicked")}>
                Contact Us
              </CTAButton>
            </ButtonWrapper>
          </LeftColumn>
        </ContentGrid>
      </InnerWrapper>
    </Section>
  );
};

export default ContactUs;


   // Styled Components //

const Section = styled.section`
  width: 100%;
  background: #ece9e3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 1rem 4rem;
  overflow-x: hidden;  /*  prevents side scroll */
  overflow-y: hidden;  /*  avoids bottom scroll caused by zoom layouts */
  box-sizing: border-box;

  @media (min-width: 640px) {
    padding: 8rem 2rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 10rem 3rem 6rem;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow: hidden; 

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1440px) {
    padding: 0 4rem;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
  }

  @media (min-width: 1440px) {
    gap: 5rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  order: 2;



  @media (min-width: 768px) {
    order: 1;
    padding-left: 1rem;
  }

  @media (min-width: 1440px) {
    padding-left: 2rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    order: 2;
    justify-content: flex-end;
  }
`;

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #2c438a;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 0.05em;

  @media (min-width: 640px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444b46;
  line-height: 1.6;
  text-align: center;
  margin-top: 0.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #444b46;
  text-align: left;

  li {
    margin-bottom: 0.7rem;
    line-height: 1.5;
  }

  strong {
    color: #444b46;
  }

  @media (max-width: 767px) {
    text-align: left;
    margin-left: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const CTAButton = styled.button`
  padding: 1.3rem 2.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: white;
  background-color: #2c438a;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  border-radius: 0;

  &:hover {
    background-color: #48cbe7;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.8rem;
    font-size: 0.9rem;
  }
`;

const GraphicImage = styled.img`
  width: 100%;
  max-width: 520px;
  height: auto;
  transition: transform 0.5s ease;
  display: block;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 1024px) {
    max-width: 560px;
  }

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`;
