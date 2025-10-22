


import React from "react";
import styled from "styled-components";

// ================== STYLED COMPONENTS ==================

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--Background-one, #ece9e3);
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row-reverse; /*  Video first, content second on large screens */
    justify-content: space-between;
    gap: 3rem;
  }
`;

// ================== LEFT SIDE (TEXT) ==================
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 1rem;
  order: 2; /*  Text second on all devices */

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 1rem;
    order: 2;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #2c438a;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (min-width: 640px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: #444b46;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (min-width: 1024px) {
    font-size: 1.12rem;
  }
`;

const Button = styled.button`
  background: #2c438a;
  color: white;
  font-weight: 500;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #48cbe7;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.9rem;
  }
`;

// ================== RIGHT SIDE (VIDEO) ==================
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  order: 1; /*  Video first on all devices */

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 2rem;
    order: 1;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  aspect-ratio: 16 / 9;
  border-radius: 0rem;
  overflow: hidden;
  background: #111;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: 0rem;
  }

  @media (max-width: 480px) {
    aspect-ratio: 16 / 12;
    border-radius: 0rem;
  }
`;

// ================== MAIN COMPONENT ==================
const AboutUsSection = () => {
  return (
    <Section>
      <InnerContainer>
        {/*  VIDEO FIRST */}
        <Right>
          <VideoWrapper>
            <video autoPlay loop muted playsInline>
              <source
                src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ed4f8c88827a2127a79245_Anion%2010%20Anniversary%20Video%20Apr%2002_N-transcode.mp4"
                type="video/mp4"
              />
              <source
                src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ed4f8c88827a2127a79245_Anion%2010%20Anniversary%20Video%20Apr%2002_N-transcode.webm"
                type="video/webm"
              />
            </video>
          </VideoWrapper>
        </Right>

        {/*  CONTENT SECOND */}
        <Left>
          <Title>About Us</Title>
          <Description>
            Semiconductor companies face unique marketing challenges. From
            decoding intricate product details to reaching a highly specialized
            audience, effective marketing is crucial for success. Anion
            Marketing specializes in bridging the gap between complex technology
            and compelling storytelling.
          </Description>
          <Button>About Us</Button>
        </Left>
      </InnerContainer>
    </Section>
  );
};

export default AboutUsSection;
