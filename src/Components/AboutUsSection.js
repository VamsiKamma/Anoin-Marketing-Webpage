// import React from "react";
// import styled from "styled-components";

// // Styled Components

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   background: var(--Background-one, #ece9e3);
//   min-height: 600px;
//   width: 100%;
//   max-width: 1900px;
//   margin: 0 auto;

//   @media (min-width: 1024px) {
//     flex-direction: row;
//   }
// `;

// // LEFT SIDE (Text)
// const Left = styled.div`
//   width: 100%;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (min-width: 768px) {
//     padding: 3rem;
//   }

//   @media (min-width: 1024px) {
//     width: 50%;
//     padding: 5rem;
//   }
// `;

// const Title = styled.h2`
//   font-size: 2.25rem;
//   font-weight: 400;
//   color: #2c438a;
//   margin-bottom: 2rem;
//   line-height: 1.2;

//   @media (min-width: 1024px) {
//     font-size: 3rem;
//   }
// `;

// const Description = styled.p`
//   color: #444b46;
//   font-size: 1.1rem;
//   line-height: 1.7;
//   margin-bottom: 2rem;
//   padding-right: 0.5rem;

//   @media (min-width: 1024px) {
//     font-size: 1.12rem;
//   }
// `;

// const Button = styled.button`
//   background: #2c438a;
//   color: white;
//   font-weight: 500;
//   padding: 1.25rem 2.5rem;
//   border: none;
//   cursor: pointer;
//   width: fit-content;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #48cbe7;
//   }
// `;

// // RIGHT SIDE (Video)
// const Right = styled.div`
//   width: 90%;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
 


//   @media (min-width: 1024px) {
//     width: 50%;
//     padding: 3rem;
//   }
// `;

// const VideoWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   aspect-ratio: 16 / 9;
//   background: #111;
//   border-radius: 0.5rem;
//   overflow: hidden;
//   margin-top: 2rem;
//   margin-leftt:40px;
  

//   video {
//     position: absolute;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     margin-leftt:40px;
//   }

//   @media (min-width: 1024px) {
//     margin-top: 0;
//   }
// `;

// // Main Component
// const AboutUsSection = () => {
//   return (
//     <Section>
//       {/* LEFT SIDE */}
//       <Left>
//         <Title>About Us</Title>
//         <Description>
//           Semiconductor companies face unique marketing challenges. From decoding intricate product details to reaching a highly specialized audience, effective marketing is crucial for success. Anion Marketing specializes in bridging the gap between complex technology and compelling storytelling.
//         </Description>
//         <Button>About Us</Button>
//       </Left>

//       {/* RIGHT SIDE (Video) */}
//       <Right>
//         <VideoWrapper>
//           <video autoPlay loop muted playsInline>
//             <source
//               src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ed4f8c88827a2127a79245_Anion%2010%20Anniversary%20Video%20Apr%2002_N-transcode.mp4"
//               type="video/mp4"
//             />
//             <source
//               src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ed4f8c88827a2127a79245_Anion%2010%20Anniversary%20Video%20Apr%2002_N-transcode.webm"
//               type="video/webm"
//             />
//           </video>
//         </VideoWrapper>
//       </Right>
//     </Section>
//   );
// };

// export default AboutUsSection;


//testing//


import React from "react";
import styled from "styled-components";

// Styled Components

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--Background-one, #ece9e3);
  min-height: 600px;
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

// LEFT SIDE (Text)
const Left = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2; /* Text second on mobile */

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    width: 50%;
    padding: 5rem;
    order: 1; /* Desktop: Text left */
  }
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 400;
  color: #2c438a;
  margin-bottom: 2rem;
  line-height: 1.2;
  margin-left: -20px;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: #444b46;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  padding-right: 3.5rem;
  margin-left: -20px;

  @media (min-width: 1024px) {
    font-size: 1.12rem;
  }
`;

const Button = styled.button`
  background: #2c438a;
  color: white;
  font-weight: 500;
  padding: 1.25rem 2.5rem;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease;
  margin-left: -20px;

  &:hover {
    background: #48cbe7;
  }
`;

// RIGHT SIDE (Video)
const Right = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  order: 1; /* Video first on mobile */

  @media (min-width: 1024px) {
    width: 50%;
    padding: 3rem;
    order: 2; /* Desktop: Video right */
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #111;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 2rem;
  margin-left: -50px;

  video {
    position: relative;
    inset: 0;
    width: 100%;
    height: 100%;
    margin-right: 50px;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

// Main Component
const AboutUsSection = () => {
  return (
    <Section>
      {/* LEFT SIDE */}
      <Left>
        <Title>About Us</Title>
        <Description>
          Semiconductor companies face unique marketing challenges. From decoding intricate product details to reaching a highly specialized audience, effective marketing is crucial for success. Anion Marketing specializes in bridging the gap between complex technology and compelling storytelling.
        </Description>
        <Button>About Us</Button>
      </Left>

      {/* RIGHT SIDE (Video) */}
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
    </Section>
  );
};

export default AboutUsSection;
