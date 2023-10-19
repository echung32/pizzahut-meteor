import React from 'react';
import { NavLink, Stack } from 'react-bootstrap';
import { Apple, ArrowRight, Facebook, Instagram, Phone, Tiktok, Twitter } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <Stack direction="horizontal" className="justify-content-around">
    <Stack gap={3}>
      <h1 className="young-serif">Get our mobile app</h1>
      <NavLink className="fw-bold d-flex gap-1 align-items-center" href="#">
        <Apple />
        <span className="red-color">APPLE STORE</span>
        <ArrowRight />
      </NavLink>
      <NavLink className="fw-bold d-flex gap-1 align-items-center" href="#">
        <Phone />
        <span className="red-color">GOOGLE PLAY STORE</span>
        <ArrowRight />
      </NavLink>
      <Stack direction="horizontal" gap={4} className="mt-3">
        <h3><Facebook /></h3>
        <h3><Instagram /></h3>
        <h3><Tiktok /></h3>
        <h3><Twitter /></h3>
      </Stack>
    </Stack>
    <Stack gap={3}>
      <Stack>
        <h6>MENU</h6>
        <small>Pizza</small>
        <small>Wings</small>
        <small>Sides</small>
        <small>Pasta</small>
        <small>Desserts</small>
        <small>Drinks</small>
        <small>Dips</small>
        <small>Deals</small>
        <small>Full Menu</small>
      </Stack>
      <Stack>
        <h6>MY ACCOUNT</h6>
        <small>Create an account</small>
        <small>Sign in</small>
      </Stack>
    </Stack>
    <Stack gap={3}>
      <Stack>
        <h6>ABOUT US</h6>
        <small>Create an account</small>
        <small>Sign in</small>
      </Stack>
      <Stack>
        <h6>ABOUT OUR FOOD</h6>
        <small>Pizza</small>
        <small>Wings</small>
        <small>Sides</small>
        <small>Pasta</small>
        <small>Desserts</small>
        <small>Drinks</small>
        <small>Dips</small>
        <small>Deals</small>
        <small>Full Menu</small>
      </Stack>
    </Stack>
    <Stack>
      <h6>CUSTOMER SERVICE</h6>
      <small>Pizza</small>
      <small>Wings</small>
      <small>Sides</small>
      <small>Pasta</small>
      <small>Desserts</small>
      <small>Drinks</small>
      <small>Dips</small>
      <small>Deals</small>
      <small>Full Menu</small>
    </Stack>
  </Stack>
);

export default Footer;
