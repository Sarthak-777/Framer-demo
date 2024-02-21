import "./App.css";
import AnimateHook from "./components/AnimateHook";
import AnimatePresenceExample from "./components/AnimatePresenceExample";
import Gesture from "./components/Gesture";
import Sequence from "./components/Sequence";
import Transition from "./components/Transition";
import XandY from "./components/XandY";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* <XandY /> */}
      {/* <Sequence /> */}
      {/* <AnimatePresenceExample /> */}
      {/* <Transition /> */}
      {/* <Gesture /> */}
      <AnimateHook />
    </div>
  );
}

export default App;
