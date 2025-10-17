// import React from "react";
// import styled from "styled-components";

// const MarketingPoints = [
//   {
//     title: "Be Found",
//     description: "Optimize for AI-based search and content platforms.",
//   },
//   {
//     title: "Go Multi-Channel",
//     description:
//       "Integrate audience behavior insights with proven marketing strategies.",
//   },
//   {
//     title: "Stay Authentic",
//     description:
//       "Craft a brand voice that stands out in an AI-saturated world.",
//   },
// ];

// const App = () => {
//   const graphicUrl =
//     "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c712d62c21396b2e1bc3d6_Ai%20Animatiion%20home%20page%20(2)%20(1)%201.svg";

//   return (
//     <PageContainer>
//       <MainSection>
//         <ContentWrapper>
//           <ContentGrid>
//             {/* Left Column */}
//             <LeftColumn>
//               <Headline>
//                 Stay Visible and Authentic in the Age of AI with Anion Marketing
//               </Headline>
//               <Description>
//                 AI is reshaping marketing—Anion Marketing helps you stay ahead
//                 by optimizing AI-driven search visibility, multi-channel
//                 strategies, and authentic brand messaging.
//               </Description>

//               <BulletList>
//                 {MarketingPoints.map((point, index) => (
//                   <li key={index}>
//                     <strong>{point.title}</strong>
//                     <span> — {point.description}</span>
//                   </li>
//                 ))}
//               </BulletList>

//               <ButtonWrapper>
//                 <CTAButton onClick={() => console.log("Contact Us Clicked")}>
//                   Contact Us
//                 </CTAButton>
//               </ButtonWrapper>
//             </LeftColumn>

//             {/* Right Column */}
//             <RightColumn>
//               <GraphicImage
//                 src={graphicUrl}
//                 alt="Abstract AI Network Graphic"
//               />
//             </RightColumn>
//           </ContentGrid>
//         </ContentWrapper>
//       </MainSection>
//     </PageContainer>
//   );
// };

// export default App;


// // ---------------- Styled Components ----------------


// const PageContainer = styled.div`
//   min-height: 100vh;
//   background: var(--Background-one, #ece9e3);
//   margin-left: -50px;
// `;

// const MainSection = styled.section`
//   border-radius: 0;
// `;

// const ContentWrapper = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 1rem;

//   @media (min-width: 640px) {
//     padding: 0 2rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 0 5rem;
//   }
// `;

// const ContentGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 4rem;
//   align-items: start;
//   padding: 2rem;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//     padding: 4rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 5rem;
//   }
// `;

// const LeftColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
// `;

// const Headline = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 400;
//   color: #2c438a;
//   line-height: 1.3;
//   letter-spacing: 0.05em;
//   margin-top : -40px;

//   @media (min-width: 640px) {
//     font-size: 2.5rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 2.5rem;
//   }
// `;

// const Description = styled.p`
//   font-size: 0.9rem;
//   color: #444b46;
//   line-height: 1.6;
//   padding-top: 0.5rem;

//   @media (min-width: 640px) {
//     font-size: 1rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 1.125rem;
//   }
// `;

// const BulletList = styled.ul`
//   list-style-type: disc;
//   padding-left: 1.5rem;
//   margin-top: -1rem;
//   color: #444b46;

//   li {
//     margin-bottom: 0.7rem;
//   }

//   strong {
//     color: #444b46;
//   }

//   span {
//     color: #444b46;
//     margin-left: 0.3rem;
//   }
// `;

// const ButtonWrapper = styled.div`
//   padding-top: 1.5rem;
//   padding-left: 2rem;

//   @media (min-width: 1024px) {
//     padding-left: 1rem;
//   }
// `;

// const CTAButton = styled.button`
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   font-weight: 400;
//   color: white;
//   background-color: #2c438a;
//   border: none;
//   cursor: pointer;
//   transition: background 0.3s ease;
//   border-radius: 0;

//   &:hover {
//     background-color: #48cbe7;
//   }
// `;

// const RightColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const GraphicImage = styled.img`
//   width: 100%;
//   height: auto;
//   margin-left : -60px;
//   margin-bottom : 5px;
//   transition: transform 0.5s ease;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;


//testing-1//



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

const App = () => {
  const graphicUrl =
    "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c712d62c21396b2e1bc3d6_Ai%20Animatiion%20home%20page%20(2)%20(1)%201.svg";

  return (
    <PageContainer>
      <MainSection>
        <ContentWrapper>
          <ContentGrid>
            {/* Right Column - will appear first on small screens */}
            <RightColumn>
              <GraphicImage
                src={graphicUrl}
                alt="Abstract AI Network Graphic"
              />
            </RightColumn>

            {/* Left Column */}
            <LeftColumn>
              <Headline>
                Stay Visible and Authentic in the Age of AI with Anion Marketing
              </Headline>
              <Description>
                AI is reshaping marketing—Anion Marketing helps you stay ahead
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
        </ContentWrapper>
      </MainSection>
    </PageContainer>
  );
};

export default App;


// ---------------- Styled Components ----------------


const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--Background-one, #ece9e3);
  overflow-x: hidden;
`;

const MainSection = styled.section`
  border-radius: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;

  /* Desktop layout */
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    padding: 4rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  order: 2; /* Default: text second on mobile */
  margin-left:-91px;

  @media(max-width:767px){
  margin-left:-20px;
}
    order: 1; /* On desktop: text goes first (left) */
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  order: 1; /* Default: video first on mobile */

  @media (min-width: 768px) {
    order: 2; /* On desktop: video second (right) */
  }
`;

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #2c438a;
  line-height: 1.3;
  letter-spacing: 0.05em;
  margin-top: -20px;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    text-align: left;
    margin-top: 10px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444b46;
  line-height: 1.6;
  text-align: center;
  padding-top: -2.5rem;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: -0.5rem;
  color: #444b46;
  text-align: left;

  li {
    margin-bottom: 0.7rem;
  }

  strong {
    color: #444b46;
  }

  span {
    color: #444b46;
    margin-left: 0.3rem;
  }

  @media (max-width: 767px) {
    padding-left: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    padding-left: 1rem;
  }
`;

const CTAButton = styled.button`
  padding: 1.5rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background-color: #2c438a;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  border-radius: 0;
  margin-left:-20px;


  &:hover {
    background-color: #48cbe7;
  }
`;

const GraphicImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
  margin-bottom: 10px;
  margin-left: -20px;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 1024px) {
    margin-left: -60px;
    margin-bottom: 5px;
  }
`;
