import Header from "./components/Header";
import Home from "./components/Home";
import ReduxToolkit from "./components/ReduxToolkit";
import Zustand from "./components/Zustand";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


export default function App() {
  return (
   <>
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/redux-toolkit" element={<ReduxToolkit/>} />
        <Route path="/zustand" element={<Zustand/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}