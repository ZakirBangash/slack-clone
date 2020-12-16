import { useState,useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideNav from "./SideNav";
import { Routes, Route, Link } from "react-router-dom";
import { Chat } from "./Chat";
import Login from "./Login";
import GlobalContext from "./GlobalState";



function App() {
  const [users, setuser] = useState(null);
  const {transactions} = useContext(GlobalContext);

  console.log(transactions)
  return (
    <div className="app">
      {transactions ? (
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
