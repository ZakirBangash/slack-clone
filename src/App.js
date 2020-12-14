import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideNav from "./SideNav";
import { Routes, Route, Link } from "react-router-dom";
import { Chat } from "./Chat";
import Login from "./Login";
import { useStateValue } from "./GlobalState";



function App() {
  
  const [{ user }, dispatch] = useStateValue();
    console.log(user)

  return (
    <div className="app">
      {user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideNav />
            <Routes>
              <Route
                path="Room/:slug"
                element={
                  <>
                    <Chat />
                  </>
                }
              />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
