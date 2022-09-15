import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import './App.css';
import DogFinder from './DogFinder';
import Dog from './Dog'
import whiskey from './whiskey.jpg';
import duke from './duke.jpg';
import perry from './perry.jpg';
import tubby from './tubby.jpg';


function App({}) {

  return (
    <div className="App">   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dogs" />}/>
        <Route path="/dogs" element={<DogFinder />}/>
        <Route path="/dogs/:dogName" element={<Dog />}/>
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </BrowserRouter>      
    </div>
  );
}

export const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]

  App.defaultProps = { dogs } 

export default App;
