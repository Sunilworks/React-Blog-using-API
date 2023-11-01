import "./App.css";
// import Topbar from "./components/Topbar/Topbar";
import Routing from "./components/Routes/Route";
import { BrowserRouter } from "react-router-dom";
import DataStore from "./components/Data/DataStore";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <DataStore>
            <Routing />
          </DataStore>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
