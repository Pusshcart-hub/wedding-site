import Hero from "./components/Hero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import RSVP from "./components/RSVP";
import Nav from "./components/Nav";
import Venue from "./components/Venue";
import Petals from "./components/Petals"; // ✅ THIS LINE
import Music from "./components/Music";
import Intro from "./components/Intro";
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
    <Music autoPlay={startMusic} />
    <Music />

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
}
