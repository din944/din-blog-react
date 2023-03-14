import Navbar from "./Navbar"; // 1 Component
import Home from "./Home"; // 2 Component

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
