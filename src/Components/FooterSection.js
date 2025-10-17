// import React from "react";
// import styled from "styled-components";

// // ================= Scroll to Top =================
// const handleScrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "auto",
//   });
// };

// // ================= SVG Icons =================
// const LinkedInIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.235-4 0v5.604h-3v-11h3v1.765c1.397-2.618 7-2.716 7 2.396v6.839z" />
//   </svg>
// );

// const XIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.917-4.717 6.643-4.008-.2-7.532-2.116-9.92-5.029-.41.702-.641 1.547-.641 2.446 0 1.956.993 3.682 2.502 4.706-.8-.026-1.56-.246-2.227-.616v.055c0 3.18 2.227 5.835 5.176 6.438-.542.15-1.115.19-1.697.19-.413 0-.814-.04-1.206-.115 1.637 5.097 6.446 8.815 12.088 8.913-2.316 1.828-5.234 2.757-8.878 2.757-.582 0-1.15-.037-1.71-.11.666 1.96 1.933 3.593 3.491 4.766z" />
//   </svg>
// );

// // ================= Data =================
// const contactData = [
//   { text: "+49 (5252) 763642", href: "tel:+495252763642" },
//   { text: "+1 (847) 691 8955", href: "tel:+18476918955" },
// ];
// const emailData = [
//   { text: "projects@anionmarketing.com", href: "mailto:projects@anionmarketing.com" },
// ];
// const socialData = [
//   { icon: <LinkedInIcon className="icon" />, href: "#" },
//   { icon: <XIcon className="icon" />, href: "#" },
// ];

// // ================= Styled Components =================
// const FooterWrapper = styled.footer`
//   position: relative;
//   background: #000;
//   color: #fff;
// `;

// const ScrollButton = styled.button`
//   position: absolute;
//   bottom: 140px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 42px;
//   height: 42px;
//   background: #f7b644;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: 0.3s ease;
//   z-index: 30;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background: #e0a030;
//   }

//   svg {
//     width: 20px;
//     height: 20px;
//     color: #000;
//   }

//   @media (min-width: 1024px) {
//     top: 100px;
//     right: 145px;
//     left: auto;
//     bottom: auto;
//     transform: translateY(-50%);
//   }
// `;

// const FooterContainer = styled.div`
//   max-width: 1900px;
//   margin: 0 auto;
//   padding: 4rem 1.5rem;

//   @media (min-width: 640px) {
//     padding: 4rem 3rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 6rem 4rem;
//   }
// `;

// const FooterRow = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-bottom: 0px solid rgba(107, 114, 128, 0.5);
//   padding-bottom: 3rem;
//   margin-bottom: 1.5rem;

//   @media (min-width: 1024px) {
//     flex-direction: row;
//   }
// `;

// const PromoBox = styled.div`
//   background: #48cbe7;
//   padding: 2rem;
//   margin-bottom: 2rem;
//   height: auto;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

//   @media (min-width: 1024px) {
//     width: 33%;
//     height: 320px;
//     margin-right: 4rem;
//     margin-left: 2rem;
//     margin-top: -9rem;
//   }

//   p {
//     color: #fff;
//     margin-top: 1.5rem;
//     font-size: 1rem;
//     line-height: 1.6;
//   }

//   a {
//     margin-top: 1rem;
//     display: inline-block;
//     padding: 0.75rem 2rem;
//     background: #fff;
//     color: #48cbe7;
//     text-decoration: none;
//     font-weight: 500;
//     transition: 0.3s ease;

//     &:hover {
//       background: #2c438a;
//       color: #fff;
//     }
//   }
// `;

// const Logo = styled.div`
//   img {
//     width: 130px;
//     height: auto;
//     filter: brightness(0) invert(1);
//     margin-top: 1rem;
//   }
// `;

// const LinkGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   flex-grow: 1;

//   @media (min-width: 1024px) {
//     padding-top: 2rem;
//   }
// `;

// const LinkColumn = styled.div`
//   width: 50%;
//   margin-bottom: 2rem;

//   @media (min-width: 768px) {
//     width: 31%;
//   }

//   h4 {
//     color: #9ca3af;
//     font-size: 0.875rem;
//     font-weight: 600;
//     text-transform: uppercase;
//     margin-bottom: 0.75rem;
//   }

//   a {
//     display: block;
//     color: #d1d5db;
//     text-decoration: none;
//     font-size: 1rem;
//     margin-bottom: 0.5rem;
//     transition: 0.3s ease;

//     &:hover {
//       color: #fff;
//     }
//   }
// `;

// const ContactBlock = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1.5rem;

//   h4 {
//     color: #9ca3af;
//     font-size: 0.875rem;
//     font-weight: 600;
//     text-transform: uppercase;
//     margin-bottom: 0.75rem;
//   }

//   a {
//     color: #d1d5db;
//     text-decoration: none;
//     font-size: 1rem;
//     transition: 0.3s ease;

//     &:hover {
//       color: #fff;
//     }
//   }

//   .icon {
//     width: 20px;
//     height: 20px;
//     color: #d1d5db;
//     transition: 0.3s;

//     &:hover {
//       color: #fff;
//     }
//   }

//   .socials {
//     display: flex;
//     gap: 1rem;
//   }
// `;

// const BottomBar = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: #9ca3af;
//   font-size: 0.875rem;
//   justify-content: space-between;
//   gap: 0.5rem;

//   @media (min-width: 640px) {
//     flex-direction: row;
//   }

//   a {
//     color: #9ca3af;
//     text-decoration: none;
//     transition: 0.3s ease;

//     &:hover {
//       color: #fff;
//     }
//   }
// `;

// // ================= Component =================
// const FooterSection = () => {
//   return (
//     <FooterWrapper>
//       <ScrollButton onClick={handleScrollToTop} aria-label="Scroll to top">
//         <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </ScrollButton>

//       <FooterContainer>
//         <FooterRow>
//           {/* Left: Aqua Promo Box */}
//           <PromoBox>
//             <Logo>
//               <img
//                 src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c55925a027a01c6cd6b9ef_Anion%20logo%20normal%2C%20no%20quote.svg"
//                 alt="Anion Logo"
//               />
//             </Logo>
//             <p>
//               Have an exciting idea or brand you want to develop? We'd love to hear about your project and offer our expertise
//               to bring it to life.
//             </p>
//             <a href="#">Contact Us</a>
//           </PromoBox>

//           {/* Right: Links + Contact Info */}
//           <LinkGrid>
//             <LinkColumn>
//               <h4>Navigation</h4>
//               <a href="#">Home</a>
//               <a href="#">Expertise</a>
//               <a href="#">Work</a>
//               <a href="#">Services</a>
//               <a href="#">Resources</a>
//               <a href="#">About</a>
//             </LinkColumn>

//             <ContactBlock>
//               <h4>Phone Number</h4>
//               {contactData.map((item, idx) => (
//                 <a key={idx} href={item.href}>
//                   {item.text}
//                 </a>
//               ))}
//             </ContactBlock>

//             <ContactBlock>
//               <h4>E-mail</h4>
//               {emailData.map((item, idx) => (
//                 <a key={idx} href={item.href}>
//                   {item.text}
//                 </a>
//               ))}
//             </ContactBlock>

//             <ContactBlock>
//               <h4>Social</h4>
//               <div className="socials">
//                 {socialData.map((item, idx) => (
//                   <a key={idx} href={item.href}>
//                     {item.icon}
//                   </a>
//                 ))}
//               </div>
//             </ContactBlock>
//           </LinkGrid>
//         </FooterRow>

//         <BottomBar>
//           <p>© 2025 Anion Marketing. All Rights Reserved</p>
//           <a href="#">Privacy Policy</a>
//         </BottomBar>
//       </FooterContainer>
//     </FooterWrapper>
//   );
// };

// export default FooterSection;

//testing-1//



import React from "react";
import styled from "styled-components";

// ================= Scroll to Top =================
const handleScrollToTop = () => {
  window.scrollTo({
    top: 5,
    behavior: "auto",
  });
};

// ================= SVG Icons =================
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.235-4 0v5.604h-3v-11h3v1.765c1.397-2.618 7-2.716 7 2.396v6.839z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.917-4.717 6.643-4.008-.2-7.532-2.116-9.92-5.029-.41.702-.641 1.547-.641 2.446 0 1.956.993 3.682 2.502 4.706-.8-.026-1.56-.246-2.227-.616v.055c0 3.18 2.227 5.835 5.176 6.438-.542.15-1.115.19-1.697.19-.413 0-.814-.04-1.206-.115 1.637 5.097 6.446 8.815 12.088 8.913-2.316 1.828-5.234 2.757-8.878 2.757-.582 0-1.15-.037-1.71-.11.666 1.96 1.933 3.593 3.491 4.766z" />
  </svg>
);

// ================= Data =================
const contactData = [
  { text: "+49 (5252) 763642", href: "tel:+495252763642" },
  { text: "+1 (847) 691 8955", href: "tel:+18476918955" },
];
const emailData = [
  { text: "projects@anionmarketing.com", href: "mailto:projects@anionmarketing.com" },
];
const socialData = [
  { icon: <LinkedInIcon className="icon" />, href: "#https://www.anionmarketing.com " },
  { icon: <XIcon className="icon" />, href: "#https://x.com/AnionMarketing" },
];

// ================= Styled Components =================
const FooterWrapper = styled.footer`
  position: relative;
  background-color: #121619;
  color: #fff;
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 42px;
  height: 42px;
  background: #f7b644;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  z-index: 30;
  border: none;
  cursor: pointer;

  &:hover {
    background: #e0a030;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #000;
  }

  @media (min-width: 1024px) {
    top: 50px;
    right: 100px;
    left: auto;
    bottom: auto;
    transform: translateY(-50%);
  }
`;

const FooterContainer = styled.div`
  max-width: 1900px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  @media (min-width: 640px) {
    padding: 4rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 4rem;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0px solid rgba(107, 114, 128, 0.5);
  padding-bottom: 3rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const PromoBox = styled.div`
  background: #48cbe7;
  padding: 2rem;
  margin-bottom: 2rem;
  height: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 1024px) {
    width: 33%;
    height: 250px;
    margin-right: 4rem;
    margin-left: 0rem;
    margin-top: -5rem;
  }

  p {
    color: #fff;
    margin-top: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  a {
    margin-top: 1rem;
    display: inline-block;
    padding: 0.75rem 2rem;
    background: #fff;
    color: #48cbe7;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;

    &:hover {
      background: #2c438a;
      color: #fff;
    }
  }
`;

const Logo = styled.div`
  img {
    width: 130px;
    height: auto;
    filter: brightness(0) invert(1);
    margin-top: 1rem;
  }
`;

const LinkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;

  @media (min-width: 1024px) {
    padding-top: 2rem;
  }
`;

const LinkColumn = styled.div`
  width: 50%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 31%;
  }

  h4 {
    color: #6d7870;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  a {
    display: block;
    color: #d1d5db;
    text-decoration: none;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    transition: 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  h4 {
    color: #6d7870;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    color: #d1d5db;
    transition: 0.3s;

    &:hover {
      color: #fff;
    }
  }

  .socials {
    display: flex;
    gap: 1rem;
  }
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9ca3af;
  font-size: 0.875rem;
  justify-content: space-between;
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  a {
    color: #9ca3af;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

// ================= Component =================
const FooterSection = () => {
  return (
    <FooterWrapper>
      <ScrollButton onClick={handleScrollToTop} aria-label="Scroll to top">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </ScrollButton>

      <FooterContainer>
        <FooterRow>
          {/* Left: Aqua Promo Box */}
          <PromoBox>
            <Logo>
              <img
                src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c55925a027a01c6cd6b9ef_Anion%20logo%20normal%2C%20no%20quote.svg"
                alt="Anion Logo"
              />
            </Logo>
            <p>
              Have an exciting idea or brand you want to develop? We'd love to hear about your project and offer our expertise
              to bring it to life.
            </p>
            <a href="#">Contact Us</a>
          </PromoBox>

          {/* Right: Links + Contact Info */}
          <LinkGrid>
            <LinkColumn>
              <h4>Navigation</h4>
              <a href="#">Home</a>
              <a href="#">Expertise</a>
              <a href="#">Work</a>
              <a href="#">Services</a>
              <a href="#">Resources</a>
              <a href="#">About</a>
            </LinkColumn>

            {/* Contact Section Combined */}
            <div style={{ width: "65%" }}>
              <ContactBlock>
                <h4>Phone Number</h4>
                {contactData.map((item, idx) => (
                  <a key={idx} href={item.href}>
                    {item.text}
                  </a>
                ))}
              </ContactBlock>

              <ContactBlock>
                <h4>E-mail</h4>
                {emailData.map((item, idx) => (
                  <a key={idx} href={item.href}>
                    {item.text}
                  </a>
                ))}
              </ContactBlock>

              <ContactBlock>
                <h4>Social</h4>
                <div className="socials">
                  {socialData.map((item, idx) => (
                    <a key={idx} href={item.href}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </ContactBlock>
            </div>
          </LinkGrid>
        </FooterRow>

        <BottomBar>
          <p>© 2025 Anion Marketing. All Rights Reserved</p>
          <a href="#">Privacy Policy</a>
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default FooterSection;

