import React from 'react';
import { NavLink, Image } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const CenterImage = () => (
  <NavLink>
    <Image src="/images/big-dinner-box.avif" alt="PizzaHut Promo" className="w-100 rounded shadow" />
  </NavLink>
);

export default CenterImage;
