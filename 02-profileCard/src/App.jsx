import "./App.css";
import { Cards } from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="bg-blue-400 text-black p-4 rounded-xl">Profile cards</h1>
      <Cards username="Sam" job="Junior Dev" country="England"/>
      <Cards username="Sarah" job="Junior Dev" country="Sweden"/>
      <Cards username="Sarah" job="Junior Dev"/>
      <Cards />
    </>
  );
}

export default App;
