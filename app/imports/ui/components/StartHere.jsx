import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Map } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const StartHere = () => (
  <Stack
    direction="horizontal"
    className="justify-content-around rounded shadow p-3 align-items-center"
    id="border-red"
  >
    <Stack direction="horizontal" id="right-border-line" className="h2 young-serif" gap={1}>
      <Map />
      <span className="pe-5"> Start here</span>
    </Stack>
    <span className="h5 pt-1">Find your store to see local deals</span>
    <Button variant="danger" className="rounded fw-bold px-5" id="white-color">FIND DEALS</Button>
  </Stack>
);

export default StartHere;
