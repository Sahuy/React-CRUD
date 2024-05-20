// App Component - Sabhi routes ko manage karta hai aur BrowserRouter ke dwara routing provide karta hai
import { BrowserRouter, Routes, Route } from "react-router-dom"; // React Router se related modules ko import kiya gaya hai
import Create from './Components/Create'; // Create component ko import kiya gaya hai
import Read from './Components/Read'; // Read component ko import kiya gaya hai
import Update from './Components/Update'; // Update component ko import kiya gaya hai

function App() {
  return (
    <div className="container">
      {/* BrowserRouter ka use kiya gaya hai, jisse routing setup hota hai */}
      <BrowserRouter>
        {/* Routes component mein sabhi routes define kiye gaye hain */}
        <Routes>
          {/* "/" route par Create component ko render karta hai */}
          <Route exact path="/" element={<Create/>}></Route>
          {/* "/read" route par Read component ko render karta hai */}
          <Route exact path="/read" element={<Read />}></Route>  
          {/* "/update" route par Update component ko render karta hai */}
          <Route exact path="/update" element={<Update />}></Route>    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
