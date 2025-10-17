import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomeContainer>
      <MainSection>
        <HomeSection id="home">
          <ContentWrapper>
            <Heading>
              A
              <Highlight> Semiconductor</Highlight> and
              <Highlight> Technology</Highlight>
              <br className="desktop-break" />
              <B2BLine>B2B Marketing Agency</B2BLine>
            </Heading>
            <SubText>
              We Bridge the Gap between Technology and Marketing
            </SubText>
          </ContentWrapper>
        </HomeSection>
      </MainSection>
    </HomeContainer>
  );
};



/* -------------------- STYLED COMPONENTS -------------------- */

const HomeContainer = styled.div`
  min-height: 65vh;
  background-color: #ece9e3;
 
`;

const MainSection = styled.main`
  background-color: #ece9e3;
  text-align: center;
`;

const HomeSection = styled.section`
  background-color: #ece9e3;
  padding: 6rem 1rem 4rem;

  @media (min-width: 640px) {
    padding-top: 8rem;
  }

  @media (min-width: 1024px) {
    padding-top: 10rem;
    padding-bottom: 6rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: "Grotesk", sans-serif;
  font-weight: 400;
//   color: #2e2e2e;
  color: var(--color--text-heading);
  font-size: 2rem;
  letter-spacing: 0.05em;
  line-height: 1.3;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const B2BLine = styled.span`
  display: block;
  line-height: 1.3;
  margin-top: 0.5rem;
`;

const Highlight = styled.span`
  color: #2c438a;
  font-family: "OverusedGrotesk", sans-serif;
`;

const SubText = styled.p`
  color: #4b4b4b;
  font-family: var(--text-large--font-family);
  font-size: 0.9rem;
  margin-top: -1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default HomePage;
