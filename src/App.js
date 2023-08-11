import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import {
  Navbar, NavbarHeading, NavbarGroup,
  NavbarDivider, Button
} from "@blueprintjs/core";
import RefreshButton from './components/RefreshButton';
import InputArea from './components/InputArea';
import { ParallaxLayer } from '@react-spring/parallax';


function App() {
  const picture = process.env.PUBLIC_URL + "/assets/piano.png";
  return (
    <div style={{ display: 'block' }}>
      <div style={{ padding: "0px 30px 0px 30px" }}>
        <Navbar style={{ backgroundColor: "#21252a" }} fixedToTop>
          <NavbarGroup align={'left'}>
            <NavbarHeading style={{ color: "white" }}>Song Dictionary</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={'right'}>
            <Button icon="home" text="Home" />
            <Button icon="help" text="Help" />
            <NavbarDivider />
            <RefreshButton icon="refresh" intent="danger" text="Clear Song Selection" />
          </NavbarGroup>
        </Navbar>
      </div>
      <div style={{ backgroundColor: "blue", width: "100%", height: "100vh" }}>
        <div
          style={{ position: "absolute", top: "30%", left: "25%", margin: "auto", width: "50%" }}
        >
          <h1 style={{ color: "white" }}>Song Dictionary</h1>
          <p style={{ color: "white" }}>
            Search for a song to get information about it (artist, key, genre).
            Available lyrics (and translations), as well as downloadable instrumental and guides.
          </p>
          <InputArea />
          <p style={{ marginTop: "10px", color: "white" }}>
            I wanted to make a helpful tool for coverists, especially taking inspiration from the
            Bandlab community. This primarily stems from my own experience having to compile resources
            to cover kpop songs! It can be tedious at times, so I hope this can help at least a little bit! ❤️
          </p>
        </div>
      </div>
      <Navbar style={{ backgroundColor: "#21252a" }} fixedToBottom />
    </div>
  );
}

export default App;
