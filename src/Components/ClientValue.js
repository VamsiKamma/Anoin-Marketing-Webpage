// import React, { useState } from "react";
// import styled, { createGlobalStyle } from "styled-components";

// /* -------------------- GLOBAL FONT STYLE -------------------- */
// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Overused+Grotesk:wght@400;500;600;700&display=swap');

//   body {
//     font-family: 'Overused Grotesk', sans-serif;
//   }
// `;

// const ClientValue = () => {
//   const valueItems = [
//     {
//       text: "Extensive Industry Expertise",
//       description:
//         "Our deep knowledge of the semiconductor and technology sectors ensures precise, effective marketing strategies tailored to complex industries.",
//     },
//     {
//       text: "Cost-Effective Marketing",
//       description:
//         "We maximize marketing impact with smart, efficient strategies, offering on-demand expertise while reducing fixed costs.",
//     },
//     {
//       text: "Flexible Engagement Models",
//       description:
//         "Our adaptable approach allows clients to scale services based on their needs, ensuring seamless collaboration.​",
//     },
//     {
//       text: "Agile and Results-Driven",
//       description:
//         "We move fast, iterate quickly, and focus on measurable outcomes that meet business objectives.",
//     },
//   ];

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleItem = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <Section>
//         <Container>
//           {/* === LEFT COLUMN === */}
//           <LeftColumn>
//             <Heading>
//               What Our Clients Value <br className="hidden sm:block" />
//               <span className="sub-heading">About Us</span>
//             </Heading>

//             <Paragraph>
//               Anion Marketing offers a{" "}
//               <strong>full spectrum of marketing services</strong>, from
//               comprehensive strategy development to targeted, high-impact
//               deliverables. Whether you need{" "}
//               <strong>end-to-end marketing support</strong> or a{" "}
//               <strong>single project execution</strong>, we adapt to your needs
//               with precision and industry expertise.
//             </Paragraph>

//             <Button>Our Expertise</Button>
//           </LeftColumn>

//           {/* === RIGHT COLUMN === */}
//           <RightColumn>
//             {valueItems.map((item, index) => (
//               <Accordion key={index} border={index < valueItems.length - 1}>
//                 <AccordionHeader>
//                   <ItemTitle>{item.text}</ItemTitle>
//                   <IconWrapper onClick={() => toggleItem(index)}>
//                     <PlusIcon rotated={expandedIndex === index}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M12 4v16m8-8H4"
//                         />
//                       </svg>
//                     </PlusIcon>
//                   </IconWrapper>
//                 </AccordionHeader>

//                 {expandedIndex === index && (
//                   <AccordionText>{item.description}</AccordionText>
//                 )}
//               </Accordion>
//             ))}
//           </RightColumn>
//         </Container>
//       </Section>
//     </>
//   );
// };

// export default ClientValue;

// /* -------------------- STYLED COMPONENTS -------------------- */

// const Section = styled.section`
//   padding: 2.5rem 1.5rem;
//   @media (min-width: 1024px) {
//     padding: 6rem 6rem;
//     margin-top: 4rem;
//     background: var(--Background-one, #ece9e3);
//   }
// `;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 3rem;

//   @media (min-width: 1024px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const LeftColumn = styled.div`
//   @media (min-width: 1024px) {
//     padding-right: 0.5rem;
//   }
// `;

// const Heading = styled.h2`
//   font-family: "Overused Grotesk", sans-serif;
//   font-size: 2.25rem;
//   line-height: 1.4;
//   font-weight: 500;
//   color: #2c438a;
//   margin-bottom: 0.5rem;

//   @media (min-width: 640px) {
//     font-size: 3rem;
//   }

//   .sub-heading {
//     display: block;
//     margin-top: 2.5rem;
//     @media (min-width: 1024px) {
//       margin-top: 1rem;
//     }
//   }
// `;

// const Paragraph = styled.p`
//   font-family: "Overused Grotesk", sans-serif;
//   font-size: 16px;
//   color: #444b46;
//   letter-spacing: 0.05em;
//   line-height: 2;
//   margin-bottom: 2.5rem;

//   strong {
//     font-weight: 600;
//     color: #444b46;
//   }

//   @media (min-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Button = styled.button`
//   font-family: "Overused Grotesk", sans-serif;
//   background: var(--Primary-500---Default, #2C438A);
//   color: #ffffff;
//   font-weight: 500;
//   padding: 1rem 1.5rem;
//   cursor: pointer;
//   letter-spacing: 0.05em;
//   border: none;         
//   border-radius: 0;      
//   outline: none;        
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #48cbe7;
//   }
// `;

// const RightColumn = styled.div`
//   margin-top: 4.5rem;
// `;

// // const Accordion = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   padding: 1.5rem 0;
// //   border-bottom: ${(props) => (props.border ? "1px solid #9ca3af" : "none")};
// // `;


// const Accordion = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 1.5rem 0;
//   border-bottom: 1px solid #9ca3af; 
// `;
 

// const AccordionHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
  
// `;

// const ItemTitle = styled.span`
//   font-family: "Overused Grotesk", sans-serif;
//   font-size: 22px;
//   font-weight: 500;
//   color: #1f2937;
//   letter-spacing: 0.05em;
// `;

// const IconWrapper = styled.div`
//   background-color: #535a5d;
//   width: 2rem;
//   height: 2rem;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   flex-shrink: 0;
// `;

// const PlusIcon = styled.div`
//   svg {
//     width: 1rem;
//     height: 1rem;
//     color: #d1d5db;
//     transform: rotate(${(props) => (props.rotated ? "-45deg" : "0deg")});
//     transition: transform 0.7s ease;
//   }
// `;

// const AccordionText = styled.p`
//   font-family: "Overused Grotesk", sans-serif;
//   margin-top: 0.75rem;
//   color: #4b5563;
//   font-size: 16px;
//   line-height: 1.7;
// `;

//testing-1//



// import React, { useState } from "react";
// import styled, { createGlobalStyle } from "styled-components";
// import { useNavigate } from "react-router-dom";



// /* -------------------- GLOBAL FONT STYLE -------------------- */
// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Overused+Grotesk:wght@400;500;600;700&display=swap');

//   body {
//     font-family: 'Overused Grotesk', sans-serif;
//   }
// `;

// const ClientValue = () => {
//   const navigate = useNavigate();

//   // ✅ Navigate to Expertise section/page
//   const handleNavigate = () => {
//     navigate("/expertise");
//   };

// const ClientValue = () => {
//   const valueItems = [
//     {
//       text: "Extensive Industry Expertise",
//       description:
//         "Our deep knowledge of the semiconductor and technology sectors ensures precise, effective marketing strategies tailored to complex industries.",
//     },
//     {
//       text: "Cost-Effective Marketing",
//       description:
//         "We maximize marketing impact with smart, efficient strategies, offering on-demand expertise while reducing fixed costs.",
//     },
//     {
//       text: "Flexible Engagement Models",
//       description:
//         "Our adaptable approach allows clients to scale services based on their needs, ensuring seamless collaboration.​",
//     },
//     {
//       text: "Agile and Results-Driven",
//       description:
//         "We move fast, iterate quickly, and focus on measurable outcomes that meet business objectives.",
//     },
//   ];

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleItem = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <Section>
//         <Container>
//           {/* === LEFT COLUMN === */}
//           <LeftColumn>
//             <Heading>
//               What Our Clients Value <br className="hidden sm:block" />
//               <span className="sub-heading">About Us</span>
//             </Heading>

//             <Paragraph>
//               Anion Marketing offers a{" "}
//               <strong>full spectrum of marketing services</strong>, from
//               comprehensive strategy development to targeted, high-impact
//               deliverables. Whether you need{" "}
//               <strong>end-to-end marketing support</strong> or a{" "}
//               <strong>single project execution</strong>, we adapt to your needs
//               with precision and industry expertise.
//             </Paragraph>

//             <Button onClick={handleNavigate}>Our Expertise</Button>
//           </LeftColumn>   

//           {/* === RIGHT COLUMN === */}
//           <RightColumn>
//             {valueItems.map((item, index) => (
//               <Accordion key={index}>
//                 <AccordionHeader>
//                   <ItemTitle>{item.text}</ItemTitle>
//                   <IconWrapper onClick={() => toggleItem(index)}>
//                     <PlusIcon rotated={expandedIndex === index}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M12 4v16m8-8H4"
//                         />
//                       </svg>
//                     </PlusIcon>
//                   </IconWrapper>
//                 </AccordionHeader>

//                 {expandedIndex === index && (
//                   <AccordionText>{item.description}</AccordionText>
//                 )}
//               </Accordion>
//             ))}
//           </RightColumn>
//         </Container>
//       </Section>
//     </>
//   );
// };

// export default ClientValue;

// /* -------------------- STYLED COMPONENTS -------------------- */

// const Section = styled.section`
//   background: var(--Background-one, #ece9e3); /* background for all screens */
//   padding: 2.5rem 1.5rem;

//   @media (min-width: 1024px) {
//     padding: 6rem 6rem;
//     margin-top: 0rem;
//   }
// `;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 3rem;
 

//   @media (min-width: 1024px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const LeftColumn = styled.div`
//   @media (min-width: 1024px) {
//     padding-right: 0.5rem;
//   }
// `;

// const Heading = styled.h2`
//   font-family: "Overused Grotesk", sans-serif;
//   font-size: 2.25rem;
//   line-height: 1.4;
//   font-weight: 500;
//   color: #2c438a;
//   margin-bottom: 0.5rem;

//   @media (min-width: 640px) {
//     font-size: 2.5rem;
//   }

//   .sub-heading {
//     display: block;
//     margin-top: 2.5rem;
//     @media (min-width: 1024px) {
//       margin-top: 0rem;
//     }
//   }
// `;

// const Paragraph = styled.p`
//   font-family: "Overused Grotesk", sans-serif;
//   font-size: 16px;
//   color: #444b46;
//   letter-spacing: 0.05em;
//   line-height: 2;
//   margin-bottom: 2.5rem;

//   strong {
//     font-weight: 600;
//     color: #444b46;
//   }

//   @media (min-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Button = styled.button`
//   font-family: "Overused Grotesk", sans-serif;
//   background: var(--Primary-500---Default, #2C438A);
//   color: #ffffff;
//   font-weight: 500;
//   padding: 1.5rem 2.5rem;
//   cursor: pointer;
//   letter-spacing: 0.05em;
//   border: none;         
//   border-radius: 0;      
//   outline: none;        
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #48cbe7;
//   }
// `;

// const RightColumn = styled.div`
//   margin-top: 2.5rem;
// `;

// const Accordion = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 1.5rem 0;
//   border-bottom: 1px solid #9ca3af; /* bottom line for all items */
// `;

// const AccordionHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const ItemTitle = styled.span`
//   font-family: "Overused Grotesk", sans-serif;
//   font-size: 20px;
//   font-weight: 500;
//   color: #1f2937;
//   letter-spacing: 0.05em;
// `;

// const IconWrapper = styled.div`
//   background-color: #535a5d;
//   width: 2rem;
//   height: 2rem;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   flex-shrink: 0;
// `;

// const PlusIcon = styled.div`
//   svg {
//     width: 1rem;
//     height: 1rem;
//     color: #d1d5db;
//     transform: rotate(${(props) => (props.rotated ? "-45deg" : "0deg")});
//     transition: transform 0.7s ease;
//   }
// `;

// const AccordionText = styled.p`
//   font-family: "Overused Grotesk", sans-serif;
//   margin-top: 0.75rem;
//   color: #4b5563;
//   font-size: 16px;
//   line-height: 1.7;
// `;

//testing//




import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

/* -------------------- GLOBAL FONT STYLE -------------------- */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Overused+Grotesk:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Overused Grotesk', sans-serif;
  }
`;

/* -------------------- MAIN COMPONENT -------------------- */
const ClientValue = () => {
  const navigate = useNavigate();

  // ✅ Navigate to Expertise section/page
  const handleNavigate = () => {
    navigate("/expertise");
  };

  // ✅ Accordion items
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
        <Container>
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
        </Container>
      </Section>
    </>
  );
};

export default ClientValue;

/* -------------------- STYLED COMPONENTS -------------------- */

const Section = styled.section`
  background: var(--Background-one, #ece9e3);
  padding: 2.5rem 1.5rem;

  @media (min-width: 1024px) {
    padding: 6rem 6rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LeftColumn = styled.div`
  @media (min-width: 1024px) {
    padding-right: 0.5rem;
  }
`;

const Heading = styled.h2`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 2.25rem;
  line-height: 1.4;
  font-weight: 500;
  color: #2c438a;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  .sub-heading {
    display: block;
    margin-top: 2.5rem;

    @media (min-width: 1024px) {
      margin-top: 0rem;
    }
  }
`;

const Paragraph = styled.p`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 16px;
  color: #444b46;
  letter-spacing: 0.05em;
  line-height: 2;
  margin-bottom: 2.5rem;

  strong {
    font-weight: 600;
    color: #444b46;
  }
`;

const Button = styled.button`
  font-family: "Overused Grotesk", sans-serif;
  background: #2c438a;
  color: #ffffff;
  font-weight: 500;
  padding: 1.5rem 2.5rem;
  cursor: pointer;
  letter-spacing: 0.05em;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #48cbe7;
  }
`;

const RightColumn = styled.div`
  margin-top: 2.5rem;
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  border-bottom: 1px solid #9ca3af;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemTitle = styled.span`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1f2937;
  letter-spacing: 0.05em;
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
`;

const PlusIcon = styled.div`
  svg {
    width: 1rem;
    height: 1rem;
    color: #d1d5db;
    transform: rotate(${(props) => (props.rotated ? "-45deg" : "0deg")});
    transition: transform 0.7s ease;
  }
`;

const AccordionText = styled.p`
  font-family: "Overused Grotesk", sans-serif;
  margin-top: 0.75rem;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.7;
`;
