import "./App.css";
import Input from "./comoponents/Input";
import Navbar from "./comoponents/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Head">Todo</div>
      <Input/>
    </div>
  );
}

export default App;
