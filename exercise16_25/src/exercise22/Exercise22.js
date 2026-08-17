import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Home = () => <div align='center' className="mt-4"><h3>Home Component</h3></div>;
const About = () => <div align='center' className="mt-4"><h3>About Component</h3></div>;
const Contact = () => <div align='center' className="mt-4"><h3>Contact Component</h3></div>;
const Profile = () => <div align='center' className="mt-4"><h3>Profile Component</h3></div>;

const CustomNavbar = () => {
 return (
   <Navbar color="dark" dark expand="md" className="px-3">
     <NavbarBrand tag={Link} to="/exercise22">Logo</NavbarBrand>
     <Nav className="me-auto" navbar>
       <NavItem>
         <NavLink tag={Link} to="/exercise22">Home</NavLink>
       </NavItem>
       <NavItem>
         <NavLink tag={Link} to="/exercise22/about">About</NavLink>
       </NavItem>
       <NavItem>
         <NavLink tag={Link} to="/exercise22/contact">Contact</NavLink>
       </NavItem>
       <NavItem>
         <NavLink tag={Link} to="/exercise22/profile">Profile</NavLink>
       </NavItem>
     </Nav>
   </Navbar>
 );
};

export default function Exercise22() {
 return (
   <div>
     <CustomNavbar />
     <Routes>
       <Route path="" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="profile" element={<Profile />} />
     </Routes>
   </div>
 );
}