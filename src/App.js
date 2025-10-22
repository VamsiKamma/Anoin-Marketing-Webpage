



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
      <CookieConsentBanner />
      {/* Define Routes only — no BrowserRouter here */}
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
              {/* <CookieConsentBanner /> */}
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

