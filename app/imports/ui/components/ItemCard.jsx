import React from 'react';
import { NavLink, Image, Stack } from 'react-bootstrap';
import { CaretRight } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const ItemCard = () => (
  <Stack className="rounded shadow">
    <Image src="/images/item-1.jpg" className="w-100 rounded-top" alt="PizzaHut" />
    <Stack direction="horizontal" className="align-items-center p-3" gap={3}>
      <Stack>
        <strong>$6.99 Pizza Hut Melts</strong>
        <small>Crispy. Dippable. Loaded with toppings & cheese.</small>
      </Stack>
      <NavLink href="#"><h3><CaretRight /></h3></NavLink>
    </Stack>
  </Stack>
);

export default ItemCard;
