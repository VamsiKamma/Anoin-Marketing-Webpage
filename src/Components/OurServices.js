// import React from "react";
// import styled from "styled-components";
// import FooterSection from "./FooterSection";

// // ------------------- DATA -------------------
// const servicesData = [
//   "Strategic Consulting",
//   "Content Generation",
//   "Marketing & Go-to-Market Services",
//   "Performance Marketing",
//   "PR and Media Relations",
//   "Graphic Design & Branding",
//   "Market Intelligence and Analytics",
//   "Engineering & Project Management Services",
// ];

// const strategicServicesList = [
//   "Market analysis and opportunity identification",
//   "Value proposition development",
//   "Targeted audience segmentation",
//   "Go-to-market strategy development",
//   "Channel marketing and partner development",
// ];

// const contentItems = [
//   "Tech, user, product guides, manuals, and brochures",
//   "Customer and sales training material",
//   "White papers, research articles, and thought leadership content",
//   "Case studies and blogs",
//   "Web & social media content",
//   "Press releases and media kits",
//   "Technology trend reports",
//   "Newsletters & internal communications",
//   "Sales enablement and field training",
// ];

// const marketingList = [
//   "Pre-launch marketing analysis, positioning, and pricing research",
//   "Launch collateral, press kits, and social media plans",
//   "Product launch execution and reporting",
//   "Lead generation and awareness campaigns",
//   "Paid media (content syndication, programmatic display ads, and re-targeting)",
//   "User/evangelist communities’ development",
//   "Roadshows and events",
// ];

// const performanceItems = [
//   "Account-based marketing (ABM)",
//   "Google SEA campaigns",
//   "Programmatic and retargeting ads",
//   "Social media marketing",
//   "Marketing analytics, optimization, and reporting",
//   "Website design",
//   "Web experience audits",
//   "SEO optimization",
//   "Email marketing and nurture campaigns",
//   "Lead management via marketing automation platforms",
// ];

// const prItems = [
//   "Enhancing brand authority",
//   "Expanding reach into new markets",
//   "Promoting new products, services, and partnerships",
//   "Increasing the visibility of campaigns",
//   "Highlighting subject matter expertise and thought leadership",
// ];

// // ------------------- STYLED COMPONENTS -------------------
// const PageWrapper = styled.div`
//   min-height: 100vh;
//   background-color: #f9f7f3;
//   font-family: "Overused Grotesk", sans-serif;
//   color: #444b46;
// `;

// const Section = styled.section`
//   padding: 4rem 1rem;
  
//   @media (min-width: 640px) {
//     padding: 4rem 2rem;
//   }
  
//   @media (min-width: 1024px) {
//     padding: 6rem 5rem;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: normal;
//   color: ${(props) => props.color || "#48cbe7"};
//   margin-bottom: 1rem;
  
//   @media (min-width: 768px) {
//     font-size: 2.875rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 3rem;
//   }
// `;

// const Paragraph = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   margin-bottom: 1rem;

//   @media (min-width: 768px) {
//     font-size: 1.125rem;
//   }
// `;

// const TagContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.75rem;
// `;

// const Tag = styled.div`
//   background: #fff;
//   padding: 0.75rem 1rem;
//   border-radius: 9999px;
//   font-size: 0.75rem;
//   font-weight: 500;
//   text-align: center;
//   white-space: nowrap;
//   cursor: default;
//   transition: all 0.2s ease;

//   &:hover {
//     background: #f7b644;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 2rem;

//   ${(props) =>
//     props.twoColumns &&
//     `
//     grid-template-columns: 1fr;

//     @media (min-width: 768px) {
//       grid-template-columns: ${props.reverse ? "1fr 1fr" : "1fr 1fr"};
//     }

//     @media (min-width: 1024px) {
//       grid-template-columns: ${props.reverse ? "1fr 1fr" : "1fr 1fr"};
//     }
//   `}
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 2rem;

//   img {
//     width: 100%;
//     max-width: 400px;
//     height: auto;
//   }
// `;

// const List = styled.ul`
//   list-style-type: none;
//   padding-left: 0;
//   margin: 0;
//   display: grid;
//   gap: 0.75rem;
// `;

// const ListItem = styled.li`
//   display: flex;
//   align-items: flex-start;
//   gap: 0.5rem;

//   &::before {
//     content: "•";
//     color: #444b46;
//     font-weight: bold;
//   }
// `;

// // ------------------- REACT COMPONENT -------------------
// const OurServicesPage = () => {
//   const midContent = Math.ceil(contentItems.length / 2);
//   const contentCol1 = contentItems.slice(0, midContent);
//   const contentCol2 = contentItems.slice(midContent);

//   const midPerf = Math.ceil(performanceItems.length / 2);
//   const perfCol1 = performanceItems.slice(0, midPerf);
//   const perfCol2 = performanceItems.slice(midPerf);

//   const ImagePlaceholder = ({ imageUrl, altText }) => (
//     <ImageWrapper>
//       <img src={imageUrl} alt={altText} />
//     </ImageWrapper>
//   );

//   return (
//     <PageWrapper>

//       {/* SERVICES TAGS */}
//       <Section>
//         <SectionTitle color="#2c438a">Our Services</SectionTitle>
//         <Paragraph>
//           At Anion, strategy and technical industry expertise meet execution excellence to fuel your business success.
//         </Paragraph>
//         <TagContainer>
//           {servicesData.map((service) => (
//             <Tag key={service}>{service}</Tag>
//           ))}
//         </TagContainer>
//       </Section>

//       {/* STRATEGIC CONSULTING */}
//       <Section>
//         <Grid twoColumns>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d1769178d1536ec1fbc73e_Strategic%20Consulting.svg"
//             altText="Strategic Consulting"
//           />
//           <div>
//             <SectionTitle>Strategic Consulting</SectionTitle>
//             <Paragraph>
//               Our in-depth knowledge of the semiconductor industry's complexities empowers us to create bespoke marketing solutions tailored to your business goals.
//             </Paragraph>
//             <Paragraph>Our consulting services include:</Paragraph>
//             <List>
//               {strategicServicesList.map((item, i) => (
//                 <ListItem key={i}>{item}</ListItem>
//               ))}
//             </List>
//           </div>
//         </Grid>
//       </Section>

//       {/* CONTENT GENERATION */}
//       <Section>
//         <Grid twoColumns reverse>
//           <div>
//             <SectionTitle>Content Generation</SectionTitle>
//             <Paragraph>We create content and campaigns that engage your audience.</Paragraph>
//             <Paragraph>Our copywriting specialists deliver:</Paragraph>
//             <Grid twoColumns>
//               {[contentCol1, contentCol2].map((col, i) => (
//                 <List key={i}>
//                   {col.map((item, index) => (
//                     <ListItem key={index}>{item}</ListItem>
//                   ))}
//                 </List>
//               ))}
//             </Grid>
//           </div>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cef1b9ccdbce2dd018319b_Content%20Generation%20(3).svg"
//             altText="Content Generation"
//           />
//         </Grid>
//       </Section>

//       {/* MARKETING SERVICES */}
//       <Section>
//         <Grid twoColumns>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d104da3381fa31f9686bc1_Marketing%20%26%20Go-to-Market%20Services%20(2).svg"
//             altText="Marketing Services"
//           />
//           <div>
//             <SectionTitle>Marketing & Go-to-Market Services</SectionTitle>
//             <Paragraph>
//               Value propositions, product positioning and messaging, pricing, and sales strategies are all areas that we help you develop to bring your products and services to market successfully.
//             </Paragraph>
//             <Paragraph>Our team supports with:</Paragraph>
//             <List>
//               {marketingList.map((item, i) => (
//                 <ListItem key={i}>{item}</ListItem>
//               ))}
//             </List>
//           </div>
//         </Grid>
//       </Section>

//       {/* PERFORMANCE MARKETING */}
//       <Section>
//         <Grid twoColumns reverse>
//           <div>
//             <SectionTitle>Performance Marketing</SectionTitle>
//             <Paragraph>
//               Enhance campaign performance through rigorous tracking, A/B testing and optimizing for crucial KPIs. Anion’s digital team specializes in personalized campaigns for account-based marketing (ABM), search engine advertising, social media ads, website design, SEO, marketing automation systems, digital content elements, and fully tracked integrated campaigns.
//             </Paragraph>
//             <Paragraph>We work with you on:</Paragraph>
//             <Grid twoColumns>
//               {[perfCol1, perfCol2].map((col, i) => (
//                 <List key={i}>
//                   {col.map((item, index) => (
//                     <ListItem key={index}>{item}</ListItem>
//                   ))}
//                 </List>
//               ))}
//             </Grid>
//           </div>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cfd80fe75cff089c31591e_Performance%20Marketing.svg"
//             altText="Performance Marketing"
//           />
//         </Grid>
//       </Section>

//       {/* PR & MEDIA RELATIONS */}
//       <Section>
//         <Grid twoColumns>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67e247222a9b822a0af62d2c_PR%20Animation%2008.svg"
//             altText="PR and Media Relations"
//           />
//           <div>
//             <SectionTitle>PR and Media Relations</SectionTitle>
//             <Paragraph>
//               At Anion we support you in developing and executing PR plans that meet your business goals. We work on “translating” your technical expertise and transforming it into stories that help build your brand credibility.
//             </Paragraph>
//             <Paragraph>Through PR and media relations we support in:</Paragraph>
//             <List>
//               {prItems.map((item, index) => (
//                 <ListItem key={index}>{item}</ListItem>
//               ))}
//             </List>
//           </div>
//         </Grid>
//        <FooterSection />
//       </Section>

//       {/* ADD OTHER SECTIONS SIMILARLY */}
//     </PageWrapper>
//   );
// };

// export default OurServicesPage;

//testing-1//




// import React from "react";
// import styled from "styled-components";
// import FooterSection from "./FooterSection";

// // ------------------- DATA -------------------
// const servicesData = [
//   "Strategic Consulting",
//   "Content Generation",
//   "Marketing & Go-to-Market Services",
//   "Performance Marketing",
//   "PR and Media Relations",
//   "Graphic Design & Branding",
//   "Market Intelligence and Analytics",
//   "Engineering & Project Management Services",
// ];

// const strategicServicesList = [
//   "Market analysis and opportunity identification",
//   "Value proposition development",
//   "Targeted audience segmentation",
//   "Go-to-market strategy development",
//   "Channel marketing and partner development",
// ];

// const contentItems = [
//   "Tech, user, product guides, manuals, and brochures",
//   "Customer and sales training material",
//   "White papers, research articles, and thought leadership content",
//   "Case studies and blogs",
//   "Web & social media content",
//   "Press releases and media kits",
//   "Technology trend reports",
//   "Newsletters & internal communications",
//   "Sales enablement and field training",
// ];

// const marketingList = [
//   "Pre-launch marketing analysis, positioning, and pricing research",
//   "Launch collateral, press kits, and social media plans",
//   "Product launch execution and reporting",
//   "Lead generation and awareness campaigns",
//   "Paid media (content syndication, programmatic display ads, and re-targeting)",
//   "User/evangelist communities’ development",
//   "Roadshows and events",
// ];

// const performanceItems = [
//   "Account-based marketing (ABM)",
//   "Google SEA campaigns",
//   "Programmatic and retargeting ads",
//   "Social media marketing",
//   "Marketing analytics, optimization, and reporting",
//   "Website design",
//   "Web experience audits",
//   "SEO optimization",
//   "Email marketing and nurture campaigns",
//   "Lead management via marketing automation platforms",
// ];

// const prItems = [
//   "Enhancing brand authority",
//   "Expanding reach into new markets",
//   "Promoting new products, services, and partnerships",
//   "Increasing the visibility of campaigns",
//   "Highlighting subject matter expertise and thought leadership",
// ];

// // ------------------- STYLED COMPONENTS -------------------
// const PageWrapper = styled.div`
//   min-height: 100vh;
//   background: var(--Background-one, #ece9e3);
//   font-family: "Overused Grotesk", sans-serif;
//   color: #444b46;
//   overflow-x: hidden;
// `;

// const Section = styled.section`
//   padding: 4rem 1rem;
//   max-width: 1400px;
//   margin: 0 auto;

//   @media (min-width: 640px) {
//     padding: 4rem 2rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 6rem 5rem;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: normal;
//   color: ${(props) => props.color || "#48cbe7"};
//   margin-bottom: 1rem;

//   @media (min-width: 768px) {
//     font-size: 2.875rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 3rem;
//   }
// `;

// const Paragraph = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   margin-bottom: 1rem;

//   @media (min-width: 768px) {
//     font-size: 1.125rem;
//   }
// `;

// const TagContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.75rem;
// `;

// const Tag = styled.div`
//   background: #fff;
//   padding: 0.75rem 1rem;
//   border-radius: 9999px;
//   font-size: 0.75rem;
//   font-weight: 500;
//   text-align: center;
//   white-space: nowrap;
//   cursor: default;
//   transition: all 0.2s ease;

//   &:hover {
//     background: #f7b644;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 2rem;

//   ${(props) =>
//     props.twoColumns &&
//     `
//     grid-template-columns: 1fr;

//     @media (min-width: 768px) {
//       grid-template-columns: 1fr 1fr;
//     }

//     @media (min-width: 1024px) {
//       grid-template-columns: 1fr 1fr;
//     }
//   `}
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: left;
//   padding: 2rem;
//   margin-left:-30px;


//   img {
//     width: 100%;
//     max-width: 400px;
//     height: auto;
//   }
// `;

// const List = styled.ul`
//   list-style-type: none;
//   padding-left: 0;
//   margin: 0;
//   display: grid;
//   gap: 0.75rem;
// `;

// const ListItem = styled.li`
//   display: flex;
//   align-items: flex-start;
//   gap: 0.5rem;

//   &::before {
//     content: "•";
//     color: #444b46;
//     font-weight: bold;
//   }
// `;

// // Footer Wrapper — Full width and no margin restriction
// const FooterWrapper = styled.div`
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   background: #f1f1f1;

//   @media (min-width: 768px) {
//     background: #f1f1f1;
//   }

//   & > * {
//     width: 100%;
//   }
// `;

// // ------------------- REACT COMPONENT -------------------
// const OurServicesPage = () => {
//   const midContent = Math.ceil(contentItems.length / 2);
//   const contentCol1 = contentItems.slice(0, midContent);
//   const contentCol2 = contentItems.slice(midContent);

//   const midPerf = Math.ceil(performanceItems.length / 2);
//   const perfCol1 = performanceItems.slice(0, midPerf);
//   const perfCol2 = performanceItems.slice(midPerf);

//   const ImagePlaceholder = ({ imageUrl, altText }) => (
//     <ImageWrapper>
//       <img src={imageUrl} alt={altText} />
//     </ImageWrapper>
//   );

//   return (
//     <PageWrapper>
//       {/* SERVICES TAGS */}
//       <Section>
//         <SectionTitle color="#2c438a">Our Services</SectionTitle>
//         <Paragraph>
//           At Anion, strategy and technical industry expertise meet execution
//           excellence to fuel your business success.
//         </Paragraph>
//         <TagContainer>
//           {servicesData.map((service) => (
//             <Tag key={service}>{service}</Tag>
//           ))}
//         </TagContainer>
//       </Section>

//       {/* STRATEGIC CONSULTING */}
//       <Section>
//         <Grid twoColumns>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d1769178d1536ec1fbc73e_Strategic%20Consulting.svg"
//             altText="Strategic Consulting"
//           />
//           <div>
//             <SectionTitle>Strategic Consulting</SectionTitle>
//             <Paragraph>
//               Our in-depth knowledge of the semiconductor industry's complexities
//               empowers us to create bespoke marketing solutions tailored to meet your
//               business goals.
//             </Paragraph>
//             <Paragraph>Our consulting services include:</Paragraph>
//             <List>
//               {strategicServicesList.map((item, i) => (
//                 <ListItem key={i}>{item}</ListItem>
//               ))}
//             </List>
//           </div>
//         </Grid>
//       </Section>

//       {/* CONTENT GENERATION */}
//       <Section>
//         <Grid twoColumns reverse>
//           <div>
//             <SectionTitle>Content Generation</SectionTitle>
//             <Paragraph>
//               We create content and campaigns that engage your audience.
//             </Paragraph>
//             <Paragraph>Our copywriting specialists deliver:</Paragraph>
//             <Grid twoColumns>
//               {[contentCol1, contentCol2].map((col, i) => (
//                 <List key={i}>
//                   {col.map((item, index) => (
//                     <ListItem key={index}>{item}</ListItem>
//                   ))}
//                 </List>
//               ))}
//             </Grid>
//           </div>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cef1b9ccdbce2dd018319b_Content%20Generation%20(3).svg"
//             altText="Content Generation"
//           />
//         </Grid>
//       </Section>

//       {/* MARKETING SERVICES */}
//       <Section>
//         <Grid twoColumns>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d104da3381fa31f9686bc1_Marketing%20%26%20Go-to-Market%20Services%20(2).svg"
//             altText="Marketing Services"
//           />
//           <div>
//             <SectionTitle>Marketing & Go-to-Market Services</SectionTitle>
//             <Paragraph>
//               Value propositions, product positioning and messaging, pricing, and
//               sales strategies are all areas that we help you develop to bring
//               your products and services to market successfully.
//             </Paragraph>
//             <Paragraph>Our team supports with:</Paragraph>
//             <List>
//               {marketingList.map((item, i) => (
//                 <ListItem key={i}>{item}</ListItem>
//               ))}
//             </List>
//           </div>
//         </Grid>
//       </Section>

//       {/* PERFORMANCE MARKETING */}
//       <Section>
//         <Grid twoColumns reverse>
//           <div>
//             <SectionTitle>Performance Marketing</SectionTitle>
//             <Paragraph>
//               Enhance campaign performance through rigorous tracking, A/B testing
//               and optimizing for crucial KPIs. Anion’s digital team specializes in
//               personalized campaigns for account-based marketing (ABM), search
//               engine advertising, social media ads, website design, SEO, marketing
//               automation systems, digital content elements, and fully tracked
//               integrated campaigns.
//             </Paragraph>
//             <Paragraph>We work with you on:</Paragraph>
//             <Grid twoColumns>
//               {[perfCol1, perfCol2].map((col, i) => (
//                 <List key={i}>
//                   {col.map((item, index) => (
//                     <ListItem key={index}>{item}</ListItem>
//                   ))}
//                 </List>
//               ))}
//             </Grid>
//           </div>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cfd80fe75cff089c31591e_Performance%20Marketing.svg"
//             altText="Performance Marketing"
//           />
//         </Grid>
//       </Section>

//       {/* PR & MEDIA RELATIONS */}
//       <Section>
//         <Grid twoColumns>
//           <ImagePlaceholder
//             imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67e247222a9b822a0af62d2c_PR%20Animation%2008.svg"
//             altText="PR and Media Relations"
//           />
//           <div>
//             <SectionTitle>PR and Media Relations</SectionTitle>
//             <Paragraph>
//               At Anion we support you in developing and executing PR plans that
//               meet your business goals. We work on “translating” your technical
//               expertise and transforming it into stories that help build your brand
//               credibility.
//             </Paragraph>
//             <Paragraph>Through PR and media relations we support in:</Paragraph>
//             <List>
//               {prItems.map((item, index) => (
//                 <ListItem key={index}>{item}</ListItem>
//               ))}
//             </List>
//           </div>
//         </Grid>
//       </Section>

//       {/* FULL-WIDTH FOOTER */}
//       <FooterWrapper>
//         <FooterSection />
//       </FooterWrapper>
//     </PageWrapper>
//   );
// };

// export default OurServicesPage;

// //testing-2//


import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterSection";

// ================= STYLED COMPONENTS =================
const Page = styled.div`
  min-height: 100vh;
  font-family: "Overused Grotesk", sans-serif;
  color: #444b46;
`;

const Section = styled.section`
  padding: 4rem 1rem;
  background: var(--Background-one, #ece9e3);

  @media (min-width: 640px) {
    padding: 5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.color || "#48cbe7"};
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.75rem;
  }
`;

const Paragraph = styled.p`
  color: #444b46;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: ${(props) => props.mb || "1.5rem"};

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tag = styled.div`
  padding: 0.75rem 1.25rem;
  background: #fff;
  color: #444b46;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    background: #f7b644;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 0.75rem;

  &::before {
    content: "•";
    color: #444b46;
    font-size: 1.2rem;
  }
`;

const TwoColumnList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

/* ✅ Updated ImageWrapper: all images left on mobile/tablet */
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  &.left {
    justify-content: flex-start;
    padding-left: 0;
  }

  &.right {
    justify-content: flex-end;
    padding-left: 5rem;
  }

  /* RESPONSIVENESS: all images left and above content */
  @media (max-width: 1023px) {
    justify-content: flex-start !important;
    padding-left: 0 !important;
    order: -1; /* moves image above content */
  }
`;

const Image = styled.img`
  width: 70%;
  max-width: 420px;
  height: auto;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 420px;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: #f1f1f1;

  & > * {
    width: 100%;
  }
`;

// ================= MAIN COMPONENT =================
const OurServicesPage = () => {
  const servicesData = [
    "Strategic Consulting",
    "Content Generation",
    "Marketing & Go-to-Market Services",
    "Performance Marketing",
    "PR and Media Relations",
    "Graphic Design & Branding",
    "Market Intelligence and Analytics",
    "Engineering & Project Management Services",
  ];

  const strategicServicesList = [
    "Market analysis and opportunity identification",
    "Value proposition development",
    "Targeted audience segmentation",
    "Go-to-market strategy development",
    "Channel marketing and partner development",
  ];

  const contentItems = [
    "Tech, user, product guides, manuals, and brochures",
    "Customer and sales training material",
    "White papers, research articles, and thought leadership content",
    "Case studies and blogs",
    "Web & social media content",
    "Press releases and media kits",
    "Technology trend reports",
    "Newsletters & internal communications",
    "Sales enablement and field training",
  ];
  const midContent = Math.ceil(contentItems.length / 2);
  const contentCol1 = contentItems.slice(0, midContent);
  const contentCol2 = contentItems.slice(midContent);

  const marketingList = [
    "Pre-launch marketing analysis, positioning, and pricing research",
    "Launch collateral, press kits, and social media plans",
    "Product launch execution and reporting",
    "Lead generation and awareness campaigns",
    "Paid media (content syndication, programmatic display ads, and re-targeting)",
    "User/evangelist communities’ development",
    "Roadshows and events",
  ];

  const performanceItems = [
    "Account-based marketing (ABM)",
    "Google SEA campaigns",
    "Programmatic and retargeting ads",
    "Social media marketing",
    "Marketing analytics, optimization, and reporting",
    "Website design",
    "Web experience audits",
    "SEO optimization",
    "Email marketing and nurture campaigns",
    "Lead management via marketing automation platforms",
  ];
  const midPerf = Math.ceil(performanceItems.length / 2);
  const perfCol1 = performanceItems.slice(0, midPerf);
  const perfCol2 = performanceItems.slice(midPerf);

  const prItems = [
    "Enhancing brand authority",
    "Expanding reach into new markets",
    "Promoting new products, services, and partnerships",
    "Increasing the visibility of campaigns",
    "Highlighting subject matter expertise and thought leadership",
  ];

  const designItems = [
    "Logos, branding, and corporate guideline development",
    "Adverts and creatives",
    "3D graphics, chip, and board images",
    "Infographics",
    "Videos and animations",
    "High-impact technical illustrations and block diagrams",
    "Print design and artwork",
    "Branded giveaways",
  ];

  const marketItems = [
    "Market trends and research",
    "Target market identification and strategy",
    "Pricing and persona analysis",
    "Competitive analysis",
    "Surveys—external and internal",
  ];

  const engineeringItems = [
    "Demo board out-of-box embedded software evaluation",
    "Demo documentation including GitHub and GitLab experiences",
    "Out-of-box demonstration videos",
    "Project management support",
    "Project reporting",
  ];

  return (
    <Page>
      {/* Section 1: Services Tags */}
      <Section>
        <Heading color="#2c438a">Our Services</Heading>
        <Paragraph>
          At Anion, strategy and technical industry expertise meet execution excellence to fuel your business success.
        </Paragraph>
        <TagContainer>
          {servicesData.map((service, index) => (
            <Tag key={index}>{service}</Tag>
          ))}
        </TagContainer>
      </Section>

      {/* Section 2: Strategic Consulting */}
      <Section>
        <Grid>
          <ImageWrapper className="left">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d1769178d1536ec1fbc73e_Strategic%20Consulting.svg" />
          </ImageWrapper>
          <div>
            <Heading>Strategic Consulting</Heading>
            <Paragraph>
              Our in-depth knowledge of the semiconductor industry's complexities empowers us to create bespoke marketing solutions tailored to your business goals.
            </Paragraph>
            <Paragraph mb="1rem">Our consulting services include:</Paragraph>
            <List>
              {strategicServicesList.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Section>

      {/* Section 3: Content Generation */}
      <Section>
        <Grid>
          <div>
            <Heading>Content Generation</Heading>
            <Paragraph>We create content and campaigns that engage your audience.</Paragraph>
            <Paragraph mb="1rem">Our copywriting specialists deliver:</Paragraph>
            <TwoColumnList>
              {[contentCol1, contentCol2].map((col, i) => (
                <List key={i}>
                  {col.map((item, idx) => (
                    <ListItem key={idx}>{item}</ListItem>
                  ))}
                </List>
              ))}
            </TwoColumnList>
          </div>
          <ImageWrapper className="right">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cef1b9ccdbce2dd018319b_Content%20Generation%20(3).svg" />
          </ImageWrapper>
        </Grid>
      </Section>

      {/* Section 4: Marketing & Go-to-Market Services */}
      <Section>
        <Grid>
          <ImageWrapper className="left">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d104da3381fa31f9686bc1_Marketing%20%26%20Go-to-Market%20Services%20(2).svg" />
          </ImageWrapper>
          <div>
            <Heading>Marketing & Go-to-Market Services</Heading>
            <Paragraph>
              Value propositions, product positioning and messaging, pricing, and sales strategies are all areas that we help you develop.
            </Paragraph>
            <Paragraph mb="1rem">Our team supports with:</Paragraph>
            <List>
              {marketingList.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Section>

      {/* Section 5: Performance Marketing */}
      <Section>
        <Grid>
          <div>
            <Heading>Performance Marketing</Heading>
            <Paragraph>
              Enhance campaign performance through rigorous tracking, A/B testing, and optimizing for crucial KPIs.
            </Paragraph>
            <Paragraph mb="1rem">We work with you on:</Paragraph>
            <TwoColumnList>
              {[perfCol1, perfCol2].map((col, i) => (
                <List key={i}>
                  {col.map((item, idx) => (
                    <ListItem key={idx}>{item}</ListItem>
                  ))}
                </List>
              ))}
            </TwoColumnList>
          </div>
          <ImageWrapper className="right">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cfd80fe75cff089c31591e_Performance%20Marketing.svg" />
          </ImageWrapper>
        </Grid>
      </Section>

      {/* Section 6: PR & Media Relations */}
      <Section>
        <Grid>
          <ImageWrapper className="left">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67e247222a9b822a0af62d2c_PR%20Animation%2008.svg" />
          </ImageWrapper>
          <div>
            <Heading>PR and Media Relations</Heading>
            <Paragraph>
              At Anion we support you in developing and executing PR plans that meet your business goals.
            </Paragraph>
            <Paragraph mb="1rem">Through PR and media relations we support in:</Paragraph>
            <List>
              {prItems.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Section>

      {/* Section 7: Graphic Design & Branding */}
      <Section>
        <Grid>
          <div>
            <Heading>Graphic Design & Branding</Heading>
            <Paragraph>
              Our in-house graphic design team creates everything from brand identity and logos to graphics, tradeshow designs, presentations, and documentation layouts.
            </Paragraph>
            <Paragraph mb="1rem">Our design services include:</Paragraph>
            <TwoColumnList>
              {designItems.map((item, i) => (
                <List key={i}>
                  <ListItem>{item}</ListItem>
                </List>
              ))}
            </TwoColumnList>
          </div>
          <ImageWrapper className="right">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67e24a8b73b62a64c13096bd_Graphic%20Design%20%26%20Branding.svg" />
          </ImageWrapper>
        </Grid>
      </Section>

      {/* Section 8: Market Intelligence & Analytics */}
      <Section>
        <Grid>
          <ImageWrapper className="left">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d104daa600baa4df1a42af_Market%20Intelligence%20and%20Analytics%20(2).svg" />
          </ImageWrapper>
          <div>
            <Heading>Market Intelligence & Analytics</Heading>
            <Paragraph>
              Data-driven marketing generates valuable business insights. Our intelligence and analytic services help you better understand your customers and take calculated action to evolve your business.
            </Paragraph>
            <Paragraph mb="1rem">We help you gain valuable insights on:</Paragraph>
            <List>
              {marketItems.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Section>

      {/* Section 9: Engineering & Project Management */}
      <Section>
        <Grid>
          <div>
            <Heading>Engineering & Project Management</Heading>
            <Paragraph>
              At Anion we have engineering and product management resources and tools to manage multiple projects and timelines to meet objectives, performance metrics, and budgets.
            </Paragraph>
            <Paragraph mb="1rem">Our tailored services include:</Paragraph>
            <List>
              {engineeringItems.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </List>
          </div>
          <ImageWrapper className="right">
            <Image src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d998e0e62816dd115c9f6d_Updates%20Engineering%20%26%20Project%20Management%20Services%201.svg" />
          </ImageWrapper>
        </Grid>
      </Section>

      {/* FOOTER */}
      <FooterWrapper>
        <FooterSection />
      </FooterWrapper>
    </Page>
  );
};

export default OurServicesPage;
