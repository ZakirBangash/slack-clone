import "./App.css";
import Header from "./Components/Header/Header";
import SideNav from "./SideNav";
import { Routes, Route, Link } from "react-router-dom";
import { Chat } from "./Chat";

function App() {
  return (
    <div className="app">
      <Header />
        <div className="app__body">
          <SideNav />
         
      <Routes>
        
          <Route
          path="search/:slug"
          element={
            <>
                <Chat />
              
            </>
          }
        />
       
      </Routes>
      </div>
    </div>
  );
}

export default App;
