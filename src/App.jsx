import Hero from "./components/Hero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import RSVP from "./components/RSVP";
import Nav from "./components/Nav";
import Venue from "./components/Venue";
import Petals from "./components/Petals";
import Music from "./components/Music";
import Intro from "./components/Intro";
import Program from "./components/Program";
import DressCode from "./components/DressCode";
import Rules from "./components/Rules";
import Divider from "./components/Divider";
import Transition from "./components/Transition";
import Gallery from "./components/Gallery";
import { useState } from "react";

// Stages: "intro" → "transition" → "site"
export default function App() {
  const [stage, setStage] = useState("intro");

  return (
    <>
      {stage === "intro" && (
        <Intro onEnter={() => setStage("transition")} />
      )}

      {stage === "transition" && (
        <Transition onDone={() => setStage("site")} />
      )}

      <div className={stage === "site" ? "block" : "hidden"}>
        <Petals />
        <Music />

        <Hero />
        <Divider />

        <Story />
        <Divider />

        <Timeline />
        <Divider />

        <Program />
        <Divider />

        <Gallery />
        <Divider />

        <Venue />
        <Divider />

        <DressCode />
        <Divider />

        <Rules />
        <Divider />

        <RSVP />

        <Nav />
      </div>
    </>
  );
}
