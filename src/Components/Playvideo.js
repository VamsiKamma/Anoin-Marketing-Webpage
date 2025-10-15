// import React from "react";
// import styled from "styled-components";

// // Container for overall padding and max-width
// const Container = styled.div`
//   width: 100%;
//   max-width: 1900px;
//   margin: 0 auto;
//   padding: 2rem 1rem;
//     background: var(--Background-one, #ece9e3);

//   @media (min-width: 640px) {
//     padding: 2rem 3rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 4rem 5rem;
//   }

//   @media (min-width: 1280px) {
//     max-width: 1210px;
//   }

//   @media (min-width: 1536px) {
//     max-width: 1900px;
//   }
// `;

// // Video wrapper with shadow and rounded corners
// const VideoWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//    background: var(--Background-one, #ece9e3);
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const PlayVideo = () => {
//   return (
//     <Container>
//       <VideoWrapper>
//         <video autoPlay loop muted playsInline>
//           <source
//             src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ae0feafce5f67e86868829_Anion%20Home%20Page%20Video_1250X620_N-transcode.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </VideoWrapper>
//     </Container>
//   );
// };

// export default PlayVideo;


//testing-1//


// import React from "react";
// import styled from "styled-components";

// //  Container for overall padding and max-width
// const Container = styled.div`
//   width: 93%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem 1rem;
//   background: var(--Background-one, #ece9e3);

//   @media (min-width: 640px) {
//     padding: 2rem 3rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 4rem 5rem;
//   }

//   @media (min-width: 1280px) {
//     max-width: 1210px;
//   }

//   @media (min-width: 1536px) {
//     max-width: 1900px;
//   }

//   /* Ensure responsive fit on smaller screens */
//   @media (max-width: 768px) {
//     padding: 1.5rem 1rem;
//   }

//   @media (max-width: 480px) {
//     padding: 1rem 0.75rem;
//   }
// `;

// // Fully responsive video wrapper
// const VideoWrapper = styled.div`
//   position: relative;
//   width: 97%;
//   background: var(--Background-one, #ece9e3);
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

//   /* Maintain 16:9 aspect ratio using aspect-ratio property */
//   aspect-ratio: 16 / 9;

//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//     border-radius: inherit;
//   }

//   /*  Responsive Adjustments */

//   /* Tablets */
//   @media (max-width: 1024px) {
//     border-radius: 0.8rem;
//     aspect-ratio: 16 / 9;
//   }

//   /* Large mobile screens */
//   @media (max-width: 768px) {
//     border-radius: 0.7rem;
//     aspect-ratio: 16 / 10;
//   }

//   /* Small mobile screens */
//   @media (max-width: 480px) {
//     border-radius: 0.6rem;
//     aspect-ratio: 4 / 2; /* slightly taller look for mobile */
//   }
// `;

// const PlayVideo = () => {
//   return (
//     <Container>
//       <VideoWrapper>
//         <video autoPlay loop muted playsInline>
//           <source
//             src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ae0feafce5f67e86868829_Anion%20Home%20Page%20Video_1250X620_N-transcode.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </VideoWrapper>
//     </Container>
//   );
// };

// export default PlayVideo;

//testing-2//


import React from "react";
import styled from "styled-components";

//  Container for overall padding and max-width
const Container = styled.div`
  width: 100%;
  max-width: 100vw; /* prevent horizontal overflow */
  margin: 0 auto;
  padding: 2rem 1rem;
  background: var(--Background-one, #ece9e3);
  overflow-x: hidden; /* hide any accidental overflow */

  @media (min-width: 640px) {
    padding: 2rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 4rem;
  }

  @media (min-width: 1280px) {
    max-width: 1210px;
  }

  @media (min-width: 1536px) {
    max-width: 1900px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

// Fully responsive video wrapper
const VideoWrapper = styled.div`
  position: relative;
  width: 97%; /* full width to avoid overflow */
  max-width: 100vw; /* prevent horizontal scroll */
  background: var(--Background-one, #ece9e3);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  aspect-ratio: 16 / 9;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: inherit;
  }

  @media (max-width: 1024px) {
    border-radius: 0.8rem;
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 768px) {
    border-radius: 0.7rem;
    aspect-ratio: 16 / 10;
  }

  @media (max-width: 480px) {
    border-radius: 0.6rem;
    aspect-ratio: 4 / 2;
  }
`;

const PlayVideo = () => {
  return (
    <Container>
      <VideoWrapper>
        <video autoPlay loop muted playsInline>
          <source
            src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ae0feafce5f67e86868829_Anion%20Home%20Page%20Video_1250X620_N-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
    </Container>
  );
};

export default PlayVideo;


