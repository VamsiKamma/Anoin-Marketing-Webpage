

// import React from "react";
// import './App.css';
// import Layout from  './Components/Layout';
// import Navbar from  './Components/Navbar';
// import { Routes, Route } from "react-router-dom"; 

// function App() {
//   return (
//     <>
//       <Layout />
//       < Navbar />
  
//     </>
//   );
// }

// export default App;



// import React from "react";
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Components/Layout";
// import Navbar from "./Components/Navbar";
// import HomePage from "./Components/HomePage";
// import PlayVideo from "./Components/Playvideo";
// import ClientValue from "./Components/ClientValue";
// import RecentWork from "./Components/RecentWork";
// import ContactUs from "./Components/ContactUs";
// import OurservicesSection from "./Components/OurservicesSection";
// import WhoWeServiceSection from "./Components/WhoWeServiceSection";
// import AboutUsSection from "./Components/AboutUsSection";
// import FooterSection from "./Components/FooterSection";
// import CookieConsentBanner from "./Components/CookieConsentBanner";
// import ExpertiseSection from "./Components/ExpertiseSection";




// // function Home() {
// //   return <h1>Home Page</h1>;
// // }

// // function About() {
// //   return <h1>About Page</h1>;
// // }

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/expertise" element={<ExpertiseSection />} />
//         {/* <Route path="/about" element={<About />} />  */}
//       </Routes>
//     <PlayVideo />
//     <ClientValue />
//     <ExpertiseSection />
//    <RecentWork />
//    <ContactUs />
//    <OurservicesSection />
//    <WhoWeServiceSection />
//    <AboutUsSection />
//    <FooterSection />
//    <CookieConsentBanner />
//       <Layout />
//     </>
//   );
// }

// export default App;



import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import PlayVideo from "./Components/Playvideo";
import ClientValue from "./Components/ClientValue";
import ExpertiseSection from "./Components/ExpertiseSection";
import RecentWork from "./Components/RecentWork";
import ContactUs from "./Components/ContactUs";
import OurservicesSection from "./Components/OurservicesSection";
import WhoWeServiceSection from "./Components/WhoWeServiceSection";
import AboutUsSection from "./Components/AboutUsSection";
import FooterSection from "./Components/FooterSection";
import CookieConsentBanner from "./Components/CookieConsentBanner";
import WorkPage from "./Components/WorkPage";
import OurServices from "./Components/OurServices";

// import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Navbar />

      {/* ✅ Define Routes only — no BrowserRouter here */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <PlayVideo />
              <ClientValue />
             
              <RecentWork />
              <ContactUs />
              <OurservicesSection />
              <WhoWeServiceSection />
              <AboutUsSection />
              <FooterSection />
              <CookieConsentBanner />
              {/* <Layout /> */}
            </>
          }
        />
        <Route path="/expertise" element={<ExpertiseSection />} />
        <Route path="/workpage" element={<WorkPage />} />
        <Route path="/ourservices" element={<OurServices />} />
      </Routes>
    </>
  );
}




export default App;

