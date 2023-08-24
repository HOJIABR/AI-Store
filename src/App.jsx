// import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import NeuralNetwork from "./components/Pages/NeuralNetwork";
import Advertising from "./components/Pages/Advertising";
import Education from "./components/Pages/Education";
import Promty from "./components/Pages/Promty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path={"/neyron"} element={<NeuralNetwork />} />
        <Route path={"/Advertising"} element={<Advertising />} />
        <Route path={"/Education"} element={<Education />} />
        <Route path={"/Promty"} element={<Promty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
