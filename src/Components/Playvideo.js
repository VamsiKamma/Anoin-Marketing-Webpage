


import React from "react";
import styled from "styled-components";

const PlayVideo = () => {
  return (
    <VideoSection>
      <ContentWrapper>
        <VideoWrapper>
          <video autoPlay loop muted playsInline>
            <source
              src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ae0feafce5f67e86868829_Anion%20Home%20Page%20Video_1250X620_N-transcode.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
      </ContentWrapper>
    </VideoSection>
  );
};

/* -------------------- STYLED COMPONENTS -------------------- */

const VideoSection = styled.section`
  background-color: #ece9e3;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  aspect-ratio: 16 / 9;
  transition: all 0.3s ease;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Laptop screens */
  @media (max-width: 1280px) {
    max-width: 1000px;
  }

  /* Tablet screens */
  @media (max-width: 1024px) {
    border-radius: 0.8rem;
    max-width: 900px;
    aspect-ratio: 16 / 9;
  }

  /* Large mobile screens */
  @media (max-width: 768px) {
    border-radius: 0.7rem;
    max-width: 100%;
    aspect-ratio: 16 / 10;
  }

  /* Small mobile screens */
  @media (max-width: 480px) {
    border-radius: 0.6rem;
    aspect-ratio: 16 / 12;
  }

  /* Extra small phones */
  @media (max-width: 360px) {
    aspect-ratio: 16 / 13;
  }
`;

export default PlayVideo;
