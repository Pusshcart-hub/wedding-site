export default function App() {
const [entered, setEntered] = useState(false);

return (
<>
{!entered && <Intro onEnter={() => setEntered(true)} />}


  <div className={entered ? "block" : "hidden"}>
    <Petals />
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
