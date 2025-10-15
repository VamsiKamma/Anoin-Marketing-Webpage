// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// // ================= Styled Components =================

// // Overall Container (fixed bottom position)
// const BannerContainer = styled.div`
//   position: fixed;
//   inset: 0 auto 0 0;
//   bottom: 0;
//   z-index: 50;
//   display: flex;
//   justify-content: flex-end;
//   pointer-events: none;
//   padding: 1rem;

//   @media (min-width: 640px) {
//     padding: 1.5rem 2.5rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 1.5rem 3rem;
//   }
// `;

// // Banner Box
// const BannerBox = styled.div`
//   pointer-events: auto;
//   background: #ffffff;
//   width: 100%;
//   max-width: 100%;
//   padding: 1rem;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
//   border: 1px solid #f1f1f1;
//   position: relative;

//   @media (min-width: 640px) {
//     max-width: 600px;
//     padding: 1.5rem;
//   }

//   @media (min-width: 768px) {
//     max-width: 700px;
//     padding: 2rem;
//   }

//   @media (min-width: 1024px) {
//     max-width: 800px;
//   }
// `;

// // Close Button (X)
// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   color: #6b7280;
//   background: none;
//   border: none;
//   font-size: 1.8rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: color 0.2s ease;

//   &:hover {
//     color: #111827;
//   }
// `;

// // Text
// const BannerText = styled.p`
//   color: #4b5563;
//   font-size: 0.9rem;
//   line-height: 1.6;
//   margin-bottom: ${(props) => (props.isLast ? "1rem" : "1.5rem")};
//   padding-right: 2rem;

//   @media (min-width: 640px) {
//     font-size: 0.95rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 1rem;
//   }
// `;

// // Bottom Section
// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
//   align-items: center;

//   @media (min-width: 640px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// const SettingsButton = styled.button`
//   background: none;
//   border: none;
//   color: #2c438a;
//   font-weight: 600;
//   text-decoration: underline;
//   cursor: pointer;
//   font-size: 0.9rem;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const ActionButtons = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 0.75rem;
// `;

// const ActionButton = styled.button`
//   background: #06b6d4;
//   color: #ffffff;
//   font-weight: 500;
//   padding: 0.6rem 1.5rem;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   box-shadow: 0 3px 6px rgba(6, 182, 212, 0.3);
//   transition: background 0.2s ease;

//   &:hover {
//     background: #0891b2;
//   }
// `;

// // ================= Component =================

// const CookieConsentBanner = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleDismiss = () => setIsVisible(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <BannerContainer>
//       <BannerBox role="alert" aria-live="assertive">
//         <CloseButton onClick={handleDismiss} aria-label="Close">
//           &times;
//         </CloseButton>

//         <BannerText>
//           This website stores cookies on your computer. These cookies are used
//           to collect information about how you interact with our website and
//           allow us to remember you. We use this information in order to improve
//           and customize your browsing experience and for analytics and metrics
//           about our visitors both on this website and other media. To find out
//           more about the cookies we use, see our Privacy Policy.
//         </BannerText>

//         <BannerText isLast>
//           If you decline, your information won’t be tracked when you visit this
//           website. A single cookie will be used in your browser to remember your
//           preference not to be tracked.
//         </BannerText>

//         <ButtonContainer>
//           <SettingsButton>Cookie settings</SettingsButton>
//           <ActionButtons>
//             <ActionButton onClick={handleDismiss}>Accept</ActionButton>
//             <ActionButton onClick={handleDismiss}>Decline</ActionButton>
//           </ActionButtons>
//         </ButtonContainer>
//       </BannerBox>
//     </BannerContainer>
//   );
// };

// export default CookieConsentBanner;


///testing-1//


// import React, { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";

// // ================= Animations =================
// const slideUp = keyframes`
//   from { opacity: 0; transform: translateY(40px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // ================= Styled Components =================

// // Floating Container (bottom-right fixed)
// const BannerContainer = styled.div`
//   position: fixed;
//   bottom: 1.5rem;
//   right: 1rem;
//   z-index: 50;
//   pointer-events: none;
//   display: flex;
//   justify-content: flex-end;
//   animation: ${slideUp} 0.5s ease forwards;

//   @media (max-width: 640px) {
//     bottom: 1rem;
//     right: 0.5rem;
//   }
// `;

// // Banner Box
// const BannerBox = styled.div`
//   pointer-events: auto;
//   background: #ffffff;
//   width: 100%;
//   max-width: 360px;
//   padding: 1rem;
//   border-radius: 12px;
//   box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
//   border: 1px solid #f3f4f6;
//   position: relative;
//   font-family: "Inter", sans-serif;

//   @media (max-width: 640px) {
//     max-width: 90%;
//     padding: 0.9rem;
//   }

//   @media (min-width: 1024px) {
//     max-width: 380px;
//   }
// `;

// // Close Button (X)
// const CloseButton = styled.button`
//   position: absolute;
//   top: 0.6rem;
//   right: 0.8rem;
//   color: #6b7280;
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: color 0.2s ease;

//   &:hover {
//     color: #111827;
//   }
// `;

// // Title
// const BannerTitle = styled.h4`
//   color: #1f2937;
//   font-weight: 600;
//   font-size: 1rem;
//   margin-bottom: 0.4rem;
// `;

// // Text
// const BannerText = styled.p`
//   color: #4b5563;
//   font-size: 0.85rem;
//   line-height: 1.5;
//   margin-bottom: 0.8rem;
// `;

// // Button Area
// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   margin-top: 0.6rem;
// `;

// const ActionButton = styled.button`
//   background: ${(props) => (props.primary ? "#06b6d4" : "#e5e7eb")};
//   color: ${(props) => (props.primary ? "#fff" : "#111827")};
//   font-weight: 500;
//   padding: 0.45rem 1rem;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   font-size: 0.85rem;
//   box-shadow: ${(props) =>
//     props.primary ? "0 3px 6px rgba(6,182,212,0.3)" : "none"};
//   transition: all 0.2s ease;

//   &:hover {
//     background: ${(props) => (props.primary ? "#0891b2" : "#d1d5db")};
//   }
// `;

// // ================= Component =================

// const CookieConsentBanner = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleDismiss = () => setIsVisible(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <BannerContainer>
//       <BannerBox role="alert" aria-live="assertive">
//         <CloseButton onClick={handleDismiss} aria-label="Close">
//           &times;
//         </CloseButton>

//         <BannerTitle>We use cookies 🍪</BannerTitle>

//         <BannerText>
//           We use cookies to improve your experience. By continuing to visit
//           this site you agree to our use of cookies.{" "}
//           <a
//             href="#"
//             style={{
//               color: "#2C438A",
//               textDecoration: "underline",
//               fontWeight: "500",
//             }}
//           >
//             Learn more
//           </a>
//           .
//         </BannerText>

//         <ButtonContainer>
//           <ActionButton onClick={handleDismiss}>Decline</ActionButton>
//           <ActionButton primary onClick={handleDismiss}>
//             Accept
//           </ActionButton>
//         </ButtonContainer>
//       </BannerBox>
//     </BannerContainer>
//   );
// };

// export default CookieConsentBanner;


//testing-2//



import React, { useState } from "react";
import styled from "styled-components";

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <PopupContainer>
      <CloseButton onClick={() => setVisible(false)}>×</CloseButton>
      <ScrollableContent>
        <p>
          This website stores cookies on your computer. These cookies are used
          to collect information about how you interact with our website and
          allow us to remember you. We use this information in order to improve
          and customize your browsing experience and for analytics and metrics
          about our visitors both on this website and other media. To find out
          more about the cookies we use, see our Privacy Policy.
        </p>
        <p>
          If you decline, your information won’t be tracked when you visit this
          website. A single cookie will be used in your browser to remember your
          preference not to be tracked.
        </p>

        <ButtonContainer>
          <CookieLink href="#">Cookies settings</CookieLink>
          <AcceptButton>Accept</AcceptButton>
          <DeclineButton>Decline</DeclineButton>
        </ButtonContainer>
      </ScrollableContent>
    </PopupContainer>
  );
};

export default CookieConsent;

// ----------------- STYLED COMPONENTS -----------------

const PopupContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 65%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 850px;
  background: #ffffff;
  color: var(--hs-banner-settings-text-color, var(--hs-banner-accentColor, #425b76));
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1000;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  box-sizing: border-box;
  transition: all 0.3s ease;
  overflow: hidden;

  /* -------- Laptop View -------- */
  @media (max-width: 1366px) and (min-width: 1025px) {
    max-width: 700px;
    left: 70%;
    padding: 1.8rem;
  }

  /* -------- Tablet View -------- */
  @media (max-width: 1024px) and (min-width: 601px) {
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    max-width: 600px;
    padding: 1.6rem;
    bottom: 25px;
    max-height: 80vh;
  }

  /* -------- Mobile View -------- */
  @media (max-width: 600px) {
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 400px;
    padding: 1.3rem;
    bottom: 15px;
    border-radius: 10px;
    max-height: 75vh;
  }
`;

const ScrollableContent = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding-right: 0.5rem;
  scroll-behavior: smooth;

  /* hide scrollbar for cleaner look */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 5px;
  }

  p {
    font-size: 15px;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 14.5px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
      text-align: justify;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #333;

  @media (max-width: 600px) {
    font-size: 20px;
    top: 10px;
    right: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
  }
`;

const CookieLink = styled.a`
  color: var(--hs-banner-settings-text-color, var(--hs-banner-accentColor, #425b76));
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const AcceptButton = styled.button`
  background: #48cbe7;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1.1rem 3rem;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
  background: #48cbe7;
  }

  @media (max-width: 1024px) {
    padding: 1rem 2.5rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const DeclineButton = styled.button`
  background: #48cbe7;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1.1rem 3rem;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
  background: #48cbe7;
  }

  @media (max-width: 1024px) {
    padding: 1rem 2.5rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
