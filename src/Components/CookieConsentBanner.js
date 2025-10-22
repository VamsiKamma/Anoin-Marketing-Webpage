



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
