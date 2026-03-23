import Hero from "./components/Hero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import RSVP from "./components/RSVP";
import Nav from "./components/Nav";
import Venue from "./components/Venue";
import Petals from "./components/Petals"; // ✅ THIS LINE
import Music from "./components/Music";
import Intro from "./components/Intro";
import Program from "./components/Program";
import DressCode from "./components/DressCode";
import Rules from "./components/Rules";
import Divider from "./components/Divider";
import { useState } from "react";
export default function App() {
const [entered, setEntered] = useState(false);
const [startMusic, setStartMusic] = useState(false);

return (
<>
{!entered && <Intro onEnter={() => {
  setEntered(true);
  setStartMusic(true);
}} />}

  <div className={entered ? "block" : "hidden"}>
    <Petals />
    <Music />

    <Hero />
    <Divider/>

    <Story />
    <Divider/>

    <Timeline />
    <Divider/>

    <Program />
    <Divider/>

    <Venue />
    <Divider/>

    <DressCode />
    <Divider/>

    <Rules />
    <Divider/>
    <RSVP />

    <Nav />
  </div>
</>


);
}
