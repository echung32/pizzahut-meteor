import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CenterImage from '../components/CenterImage';
import StartHere from '../components/StartHere';
import Featured from '../components/Featured';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <>
    <NavBar />
    <Container>
      <Stack gap={5} className="my-5">
        <CenterImage />
        <StartHere />
        <Featured />
        <hr />
        <Footer />
        <hr />
      </Stack>
    </Container>
  </>
);

export default Landing;
