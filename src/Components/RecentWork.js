// import React from "react";
// import styled from "styled-components";

// // ---------------------- DATA ----------------------
// const workData = [
//   {
//     iconUrl:
//       "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c1506f80ef9ee2a714e562_Market%20Research%20yellow.svg",
//     title: "Market Research",
//     description:
//       "Behavior and trend research into how engineers learn, trust, and gather information.",
//     isCta: false,
//   },
//   {
//     iconUrl:
//       "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c14f43e1481be45bd0be3f_Strategic%20Consulting%2028-02-25.svg",
//     title: "Strategic Consulting",
//     description:
//       "Fully outsourced marketing strategy and execution for a European company.",
//     isCta: false,
//   },
//   {
//     iconUrl:
//       "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c14f431c685961ef13c3b2_Multi%20channel%2028-02-25.svg",
//     title: "Multi-Channel",
//     description:
//       "Multi-channel performance marketing for Power Management ICs.",
//     isCta: false,
//   },
//   {
//     description:
//       "See examples of how Anion Marketing helped semiconductor and tech brands with their marketing initiatives.",
//     isCta: true,
//   },
// ];

// // ---------------------- STYLED COMPONENTS ----------------------

// const Section = styled.section`
//   padding: 2rem 1rem;

//   @media (min-width: 768px) {
//     padding: 4rem 2rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 6rem 4rem;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   max-width: 1500px;
//   margin: 0 auto;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: 400;
//   color: #4a5a7b;
//   margin-bottom: 2.5rem;
//   text-align: left;

//   @media (min-width: 768px) {
//     font-size: 2.5rem;
//     margin-bottom: 3rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 3rem;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   border: 1px solid #ece9e3;
//   background-color: #ece9e3;
//   overflow: hidden;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
// `;

// const Card = styled.div`
//   background-color: #fff;
//   color: #2e2e2e;
//   border: 1px solid #ece9e3;
//   padding: ${(props) => (props.isCta ? "2rem" : "3rem 1rem")};
//   display: flex;
//   flex-direction: column;
//   justify-content: ${(props) => (props.isCta ? "space-between" : "flex-start")};
//   transition: all 0.3s ease;

//   &:hover {
//     transform: ${(props) => (props.isCta ? "none" : "translateY(-4px)")};
//     box-shadow: ${(props) =>
//       props.isCta ? "none" : "0 10px 15px rgba(0, 0, 0, 0.05)"};
//   }

//   @media (min-width: 1024px) {
//     padding: ${(props) => (props.isCta ? "2.5rem" : "4rem 1.5rem")};
//   }
// `;

// const Icon = styled.img`
//   width: 3.5rem;
//   height: 3rem;
//   object-fit: contain;
//   margin-bottom: 2rem;
// `;

// const CardTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 400;
//   color: #000;
//   margin-bottom: 1rem;
//   margin-top: 2rem;

//   @media (min-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// const CardDescription = styled.p`
//   font-size: 1rem;
//   color: #555;
//   line-height: 1.6;
//   letter-spacing: 0.03em;

//   @media (min-width: 768px) {
//     font-size: 1rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 1.05rem;
//   }
// `;

// const CTAButton = styled.a`
//   display: inline-block;
//   margin-top: 1.5rem;
//   background-color: #2c438a;
//   color: white;
//   text-decoration: none;
//   padding: 0.9rem 2.5rem;
//   font-size: 0.9rem;
//   font-weight: 400;
//   border-radius: 0;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #48cbe7;
//   }
// `;

// // ---------------------- COMPONENTS ----------------------

// const WorkCard = ({ data }) => {
//   return (
//     <Card isCta={data.isCta}>
//       {!data.isCta ? (
//         <>
//           <Icon src={data.iconUrl} alt={`${data.title} icon`} />
//           <CardTitle>{data.title}</CardTitle>
//           <CardDescription>{data.description}</CardDescription>
//         </>
//       ) : (
//         <>
//           <CardDescription>{data.description}</CardDescription>
//           <CTAButton href="#">View More</CTAButton>
//         </>
//       )}
//     </Card>
//   );
// };

// // ---------------------- MAIN COMPONENT ----------------------

// const RecentWorkSection = () => {
//   return (
//     <Section>
//       <Container>
//         <Title>Our Recent Work</Title>
//         <Grid>
//           {workData.map((item, index) => (
//             <WorkCard key={index} data={item} />
//           ))}
//         </Grid>
//       </Container>
//     </Section>
//   );
// };

// export default RecentWorkSection;


//tseting-1//

import React from "react";
import styled from "styled-components";

// ---------------------- DATA ----------------------
const workData = [
  {
    iconUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c1506f80ef9ee2a714e562_Market%20Research%20yellow.svg",
    title: "Market Research",
    description:
      "Behavior and trend research into how engineers learn, trust, and gather information.",
    isCta: false,
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c14f43e1481be45bd0be3f_Strategic%20Consulting%2028-02-25.svg",
    title: "Strategic Consulting",
    description:
      "Fully outsourced marketing strategy and execution for a European company.",
    isCta: false,
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c14f431c685961ef13c3b2_Multi%20channel%2028-02-25.svg",
    title: "Multi-Channel",
    description: "Multi-channel performance marketing for Power Management ICs.",
    isCta: false,
  },
  {
    description:
      "See examples of how Anion Marketing helped semiconductor and tech brands with their marketing initiatives.",
    isCta: true,
  },
];

// ---------------------- STYLED COMPONENTS ----------------------

const Section = styled.section`
  background: var(--Background-one, #ece9e3);
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #4a5a7b;
  margin-bottom: 2.5rem;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid #ece9e3;
  background-color: #fff;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  color: #2e2e2e;
  border: 1px solid #ece9e3;
  padding: ${(props) => (props.isCta ? "2rem" : "3rem 1rem")};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isCta ? "space-between" : "flex-start")};
  transition: all 0.3s ease;
  position: relative; /* Added to anchor CTAButton properly */

  &:hover {
    transform: ${(props) => (props.isCta ? "none" : "translateY(-4px)")};
    box-shadow: ${(props) =>
      props.isCta ? "none" : "0 10px 15px rgba(0, 0, 0, 0.05)"};
  }

  @media (min-width: 1024px) {
    padding: ${(props) => (props.isCta ? "1.5rem" : "1rem 1.5rem")};
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 3rem;
  object-fit: contain;
  margin-bottom: 4rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  letter-spacing: 0.03em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.05rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem; /* Adjusted so it sits below text */
  margin-bottom : 65px;
  background-color: #2c438a;
  color: white;
  text-decoration: none;
  padding: 1.5rem 2.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 0;
  transition: background 0.3s ease, transform 0.2s ease;
  text-align: center;
  align-self: flex-start;

  &:hover {
    background-color: #48cbe7;
    transform: translateY(-2px);
  }

  /* Ensures the button stays below text in mobile view */
  @media (max-width: 767px) {
    margin-top: 2rem;
    align-self: flex-start;
    width: auto;
  }
`;

// ---------------------- COMPONENTS ----------------------

const WorkCard = ({ data }) => {
  return (
    <Card isCta={data.isCta}>
      {!data.isCta ? (
        <>
          <Icon src={data.iconUrl} alt={`${data.title} icon`} />
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </>
      ) : (
        <>
          <CardDescription>{data.description}</CardDescription>
          <CTAButton href="#">View More</CTAButton>
        </>
      )}
    </Card>
  );
};

// ---------------------- MAIN COMPONENT ----------------------

const RecentWorkSection = () => {
  return (
    <Section>
      <Container>
        <Title>Our Recent Work</Title>
        <Grid>
          {workData.map((item, index) => (
            <WorkCard key={index} data={item} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default RecentWorkSection;
