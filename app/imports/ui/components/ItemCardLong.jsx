import React from 'react';
import { NavLink, Image, Stack } from 'react-bootstrap';
import { CaretRight } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const ItemCardLong = () => (
  <Stack className="rounded shadow">
    <Image src="/images/item-2.avif" className="w-100 rounded-top" alt="PizzaHut" />
    <Stack direction="horizontal" className="align-items-center p-3" gap={3}>
      <Stack className="w-100">
        <strong>$12.99 Original Stuffed Crust®</strong>
        <small>Nothing beats the original.</small>
      </Stack>
      <NavLink href="#"><h3><CaretRight /></h3></NavLink>
    </Stack>
  </Stack>
);

export default ItemCardLong;
