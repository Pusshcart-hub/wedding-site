import Hero from "./components/Hero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import RSVP from "./components/RSVP";
import Nav from "./components/Nav";
import Venue from "./components/Venue";

export default function App() {
return ( <div> <Hero /> 
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>
  <Story /> 
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>
  <Timeline />
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>
  <Venue /> 
  <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>
  <RSVP /> <div className="w-12 h-[1px] bg-gray-300 mx-auto my-10"></div>
  <Nav /> 
</div>
);
}
