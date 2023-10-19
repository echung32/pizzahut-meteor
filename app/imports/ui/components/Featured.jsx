import React from 'react';
import { NavLink, Stack } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import ItemCard from './ItemCard';
import ItemCardLong from './ItemCardLong';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Featured = () => (
  <Stack gap={3}>
    <Stack direction="horizontal" gap={3}>
      <h1 className="young-serif">Featured</h1>
      <NavLink>
        <small className="red-color fw-bold">SEE MORE </small>
        <ArrowRight />
      </NavLink>
    </Stack>
    <Stack direction="horizontal" gap={3} className="justify-content-around">
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </Stack>
    <Stack direction="horizontal" gap={3} className="justify-content-around mt-3">
      <ItemCardLong />
      <ItemCardLong />
    </Stack>
  </Stack>
);

export default Featured;
