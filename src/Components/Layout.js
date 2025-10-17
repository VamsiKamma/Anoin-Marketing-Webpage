// import React from "react";
// import "./Layout.css"; // Styling file

// const Layout = ({ children }) => {
//   return (
//     <div className="layout">
//       {children}
//     </div>
//   );
// };

// export default Layout;


// import React from "react";
// import styled, { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   html, body {
//     margin: 0;
//     padding: 0;
//     height: 100%;
//     width: 100%;
//     overflow-y: auto;  
//     overflow-x: hidden;
//   }

//   #root {
//     height: 100%;
//     width: 100%;
//     overflow-y: auto;
//     overflow-x: hidden;
//   }
// `;

// const LayoutContainer = styled.div`
//   width: 1440px;
//   height: 5715px;
//   background: var(--Background-one, #ece9e3);
//   margin: 0 auto; /* centers the layout horizontally */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   overflow-y: auto;   
//   overflow-x: hidden;
// `;

// const Layout = ({ children }) => {
//   return (
//     <>
//       <GlobalStyle />
//       <LayoutContainer>{children}</LayoutContainer>
//     </>
//   );
// };

// export default Layout;
