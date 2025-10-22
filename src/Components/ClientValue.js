

import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

/* -------------------- GLOBAL FONT STYLE -------------------- */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Overused+Grotesk:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Overused Grotesk', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

/* -------------------- MAIN COMPONENT -------------------- */
const ClientValue = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/expertise");
  };

  const valueItems = [
    {
      text: "Extensive Industry Expertise",
      description:
        "Our deep knowledge of the semiconductor and technology sectors ensures precise, effective marketing strategies tailored to complex industries.",
    },
    {
      text: "Cost-Effective Marketing",
      description:
        "We maximize marketing impact with smart, efficient strategies, offering on-demand expertise while reducing fixed costs.",
    },
    {
      text: "Flexible Engagement Models",
      description:
        "Our adaptable approach allows clients to scale services based on their needs, ensuring seamless collaboration.​",
    },
    {
      text: "Agile and Results-Driven",
      description:
        "We move fast, iterate quickly, and focus on measurable outcomes that meet business objectives.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <GlobalStyle />
      <Section>
        <ContentWrapper>
          {/* === LEFT COLUMN === */}
          <LeftColumn>
            <Heading>
              What Our Clients Value <br className="hidden sm:block" />
              <span className="sub-heading">About Us</span>
            </Heading>

            <Paragraph>
              Anion Marketing offers a{" "}
              <strong>full spectrum of marketing services</strong>, from
              comprehensive strategy development to targeted, high-impact
              deliverables. Whether you need{" "}
              <strong>end-to-end marketing support</strong> or a{" "}
              <strong>single project execution</strong>, we adapt to your needs
              with precision and industry expertise.
            </Paragraph>

            <Button onClick={handleNavigate}>Our Expertise</Button>
          </LeftColumn>

          {/* === RIGHT COLUMN === */}
          <RightColumn>
            {valueItems.map((item, index) => (
              <Accordion key={index}>
                <AccordionHeader>
                  <ItemTitle>{item.text}</ItemTitle>
                  <IconWrapper onClick={() => toggleItem(index)}>
                    <PlusIcon rotated={expandedIndex === index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </PlusIcon>
                  </IconWrapper>
                </AccordionHeader>

                {expandedIndex === index && (
                  <AccordionText>{item.description}</AccordionText>
                )}
              </Accordion>
            ))}
          </RightColumn>
        </ContentWrapper>
      </Section>
    </>
  );
};

export default ClientValue;

/* -------------------- STYLED COMPONENTS -------------------- */

const Section = styled.section`
  background: #ece9e3;
  width: 100%;
  padding: 6rem 1rem 4rem;
  display: flex;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 8rem 2rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 10rem 0 6rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const RightColumn = styled.div`
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const Heading = styled.h2`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 500;
  color: #2c438a;
  margin-bottom: 1rem;

  .sub-heading {
    display: block;
    margin-top: 2.5rem;

    @media (max-width: 640px) {
      margin-top: 1.5rem;
    }

    @media (min-width: 1024px) {
      margin-top: 0rem;
    }
  }

  @media (max-width: 640px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 15px;
  color: #444b46;
  letter-spacing: 0.05em;
  line-height: 1.9;
  margin-bottom: 2.5rem;

  strong {
    font-weight: 600;
    color: #444b46;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
    line-height: 1.8;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

/* --- SMALLER + NARROWER BUTTON --- */
const Button = styled.button`
  font-family: "Overused Grotesk", sans-serif;
  background: #2c438a;
  color: #ffffff;
  font-weight: 500;
  padding: 1.5rem 2rem;  // smaller padding //
  width: fit-content;   // button only as wide as text //
  cursor: pointer;
  letter-spacing: 0.05em;
  border: none;
  outline: none;
  font-size: 14.5px;
  transition: background-color 0.3s ease;
  border-radius: 0px;
  align-self: flex-start;

  &:hover {
    background-color: #48cbe7;
  }

  @media (max-width: 640px) {
    padding: 0.7rem 1rem;
    font-size: 14px;
    align-self: center;
  }
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0;
  border-bottom: 1px solid #9ca3af;

  @media (max-width: 640px) {
    padding: 1rem 0;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemTitle = styled.span`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #1f2937;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const IconWrapper = styled.div`
  background-color: #535a5d;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const PlusIcon = styled.div`
  svg {
    width: 1rem;
    height: 1rem;
    color: #d1d5db;
    transform: rotate(${(props) => (props.rotated ? "-45deg" : "0deg")});
    transition: transform 0.7s ease;
  }

  @media (max-width: 640px) {
    svg {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;

const AccordionText = styled.p`
  font-family: "Overused Grotesk", sans-serif;
  margin-top: 0.75rem;
  color: #4b5563;
  font-size: 15px;
  line-height: 1.7;

  @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
