// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import styled from "styled-components";

// /* Styled Components */
// const Header = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 90%;
//   width:1320px;
//   height:81px;
//   flex-shrink: 0;
//   z-index: 1000
//   background:  #ece9e3;
//   padding: 0.5rem 1rem;

//   @media (min-width: 1024px) {
//     padding: -5rem -4rem;
//   }
// `;

// const NavContainer = styled.div`
//   width: 97%;
//   background: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 80px;
//   border-radius: 0;
//   transition: all 0.3s ease;

//   @media (min-width: 768px) {
//     height: 96px;
//     padding: 0 1rem;
//   }

//   @media (min-width: 1024px) {
//     height: 90px;
//     padding: 0 1rem;
//   }
// `;

// const Logo = styled.img`
//   height: 32.222px;
//   width: auto;

//   @media (min-width: 480px) {
//     height: 40px;
//   }

//   @media (min-width: 768px) {
//     height: 65px;
//   }

//   @media (min-width: 1024px) {
//     height: 70px;
//   }
// `;

// const NavLinks = styled.nav`
//   display: none;

//   @media (min-width: 768px) {
//     display: flex;
//     align-items: center;
//     gap: 2.5rem;
//   }

//   @media (min-width: 1024px) {
//     gap: 3rem;
//   }
// `;

// const NavLink = styled(Link)`
//   position: relative;
//   font-size: 15px;
//   font-weight: 400;
//   color: ${(props) => (props.active ? "#2C438A" : "#555")};
//   text-decoration: none;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #2c438a;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: -6px;
//     left: 50%;
//     transform: translateX(-50%);
//     height: ${(props) => (props.active ? "6px" : "0")};
//     width: ${(props) => (props.active ? "6px" : "0")};
//     background: #2c438a;
//     border-radius: 50%;
//     transition: all 0.3s ease;
//   }
// `;

// const ContactButton = styled.button`
//   display: inline-flex;
//   margin-left-width:20px;

//   @media (min-width: 768px) {
//     display: inline-flex:
//   }

//   align-items: center;
//   justify-content: center;
//   width: 145px;
//   height:75px;
//   font-size: 15px;
//   font-weight: 500;
//   color: #fff;
//   background: #2c438a;
//   border: none;
//   cursor: pointer;
//   border-radius: 2px;
//   transition: all 0.3s ease;
//   gap: 5px:
//   padding: 10px 10px:

//   @media (min-width: 1024px) {
//     width: 150px;
//     height: 52px;
//   }

//   &:hover {
//     background: #48cbe7;
//   }
// `;

// const HamburgerButton = styled.button`
//   display: block;
//   background: none;
//   border: none;
//   padding: 8px;
//   margin-right: 16px;
//   z-index: 1100;
//   cursor: pointer;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const MobileMenu = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   background: #ece9e3;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   z-index: 999;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   animation: fadeIn 0.3s ease;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(-10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const MobileLink = styled(Link)`
//   width: 100%;
//   text-align: center;
//   padding: 1rem 0;
//   font-size: 18px;
//   font-weight: 500;
//   color: ${(props) => (props.active ? "#2C438A" : "#333")};
//   text-decoration: none;
//   border-bottom: 1px solid #dcd8d3;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #dcd8d3;
//   }
// `;

// const MobileButton = styled.button`
//   width: 80%;
//   margin: 1rem 0 1.5rem;
//   padding: 0.75rem 0;
//   background: #2c438a;
//   color: white;
//   border: none;
//   font-size: 16px;
//   font-weight: 500;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #48cbe7;
//   }
// `;

// /* SVG Icons */
// const CloseIcon = ({ color = "#2C438A" }) => (
//   <svg
//     width="28"
//     height="28"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke={color}
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 6L6 18M6 6l12 12" />
//   </svg>
// );

// const HamburgerIcon = ({ color = "#2C438A" }) => (
//   <svg
//     width="28"
//     height="28"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke={color}
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M4 6h16M4 12h16M4 18h16" />
//   </svg>
// );

// /*  Navbar Component */
// const Navbar = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Expertise", path: "/expertise" },
//     { name: "Work", path: "/work" },
//     { name: "Services", path: "/services" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Market Reports", path: "/market-reports" },
//     { name: "About", path: "/about" },
//   ];

//   const [active, setActive] = useState("Home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const currentLink = navLinks.find((link) => link.path === location.pathname);
//     if (currentLink) setActive(currentLink.name);
//   }, [location.pathname]);

//   const handleNavLinkClick = (name) => {
//     setActive(name);
//     setIsMenuOpen(false);
//   };

//   const logoUrl =
//     "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c55925a027a01c6cd6b9ef_Anion%20logo%20normal%2C%20no%20quote.svg";

//   return (
//     <Header>
//       <NavContainer>
//         <Logo src={logoUrl} alt="Anion Marketing Logo" />

//         {/* Desktop Navigation */}
//         <NavLinks>
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               active={location.pathname === link.path}
//               onClick={() => handleNavLinkClick(link.name)}
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </NavLinks>

//         {/* Desktop Button */}
//         <ContactButton>Contact Us</ContactButton>

//         {/* Hamburger Menu Button */}
//         <HamburgerButton onClick={() => setIsMenuOpen((prev) => !prev)}>
//           {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
//         </HamburgerButton>
//       </NavContainer>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <MobileMenu>
//           {navLinks.map((link) => (
//             <MobileLink
//               key={link.name}
//               to={link.path}
//               active={location.pathname === link.path}
//               onClick={() => handleNavLinkClick(link.name)}
//             >
//               {link.name}
//             </MobileLink>
//           ))}
//           <MobileButton>Contact Us</MobileButton>
//         </MobileMenu>
//       )}
//     </Header>
//   );
// };

// export default Navbar;


//testing-1//


import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

/* ✅ Styled Components */
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 22px;
  width: 97%;
  background: #ece9e3;
  z-index: 1000;
  // box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
`;

const NavContainer = styled.div`
  max-width: 1320px;
  margin: 10px auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 1.5rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    height: 90px;
    padding: 25px -5rem;
  }
`;

const Logo = styled.img`
  height: 45px;
  width: auto;

  @media (min-width: 768px) {
    height: 60px;
  }

  @media (min-width: 1024px) {
    height: 65px;
  }
`;

const NavLinks = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.active ? "#2C438A" : "#555")};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2c438a;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    height: ${(props) => (props.active ? "6px" : "0")};
    width: ${(props) => (props.active ? "6px" : "0")};
    background: #2c438a;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
`;

const ContactButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 70px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background: #2c438a;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover {
    background: #48cbe7;
  }
`;

/* ✅ Custom Slanted Hamburger Icon */
const HamburgerButton = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1100;
    gap: 2rem;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    height: 3px;
    background-color: #111;
    border-radius: 2px;
    margin: 5px 0;
    gap: 2rem;
    transform: rotate(45deg);
    transform-origin: left;
    transition: all 0.3s ease;
  }

  /* Line lengths */
  div:nth-child(1) {
    width: 14px; /* small */
  
  }
  div:nth-child(2) {
    width: 24px; /* long (bigger) */
  }
  div:nth-child(3) {
    width: 14px; /* small again */
  }

  &.open div {
    transform: rotate(0deg);
    width: 20px;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: #ece9e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MobileLink = styled(Link)`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#2C438A" : "#333")};
  text-decoration: none;
  border-bottom: 1px solid #dcd8d3;
  transition: background 0.3s ease;

  &:hover {
    background: #dcd8d3;
  }
`;

const MobileButton = styled.button`
  width: 80%;
  margin: 1rem 0 1.5rem;
  padding: 0.75rem 0;
  background: #2c438a;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #48cbe7;
  }
`;

/* ✅ Navbar Component */
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Expertise", path: "/expertise" },
    { name: "Work", path: "/workpage" },
    { name: "Services", path: "/OurServices" },
    { name: "Blogs", path: "/blogs" },
    { name: "Market Reports", path: "/market-reports" },
    { name: "About", path: "/about" },
  ];

  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentLink = navLinks.find((link) => link.path === location.pathname);
    if (currentLink) setActive(currentLink.name);
  }, [location.pathname]);

  const handleNavLinkClick = (name) => {
    setActive(name);
    setIsMenuOpen(false);
  };

  const logoUrl =
    "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c55925a027a01c6cd6b9ef_Anion%20logo%20normal%2C%20no%20quote.svg";

  return (
    <Header>
      <NavContainer>
        <Logo src={logoUrl} alt="Anion Marketing Logo" />

        {/* Desktop Navigation */}
        <NavLinks>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              active={location.pathname === link.path}
              onClick={() => handleNavLinkClick(link.name)}
            >
              {link.name}
            </NavLink>
          ))}
        </NavLinks>

        {/* Desktop Button */}
        <ContactButton>Contact Us</ContactButton>

        {/* ✅ Custom Slanted Hamburger Icon */}
        <HamburgerButton
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={isMenuOpen ? "open" : ""}
        >
          <div></div>
          <div></div>
          <div></div>
        </HamburgerButton>
      </NavContainer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu>
          {navLinks.map((link) => (
            <MobileLink
              key={link.name}
              to={link.path}
              active={location.pathname === link.path}
              onClick={() => handleNavLinkClick(link.name)}
            >
              {link.name}
            </MobileLink>
          ))}
          <MobileButton>Contact Us</MobileButton>
        </MobileMenu>
      )}
    </Header>
  );
};

export default Navbar;

