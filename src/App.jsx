import Hero from "./components/Hero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import RSVP from "./components/RSVP";
import Nav from "./components/Nav";
import Venue from "./components/Venue";
import Petals from "./components/Petals";
import { useState } from "react";
import Intro from "./components/Intro";
export default function App() {
const [entered, setEntered] = useState(false);

    return ( 
<>
{!entered && <Intro onEnter={() => setEntered(true)} />}

<div className={entered ? "block" : "hidden"}>
  <Petals />

  <Hero />
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>

  <Story />
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>

  <Timeline />
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>

  <Venue />
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>

  <RSVP />

  <Nav />
</div>

</>
);
