import React, { ReactElement } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ChatBotPage from "./page/ChatBotPage";
import HomePage from "./page/HomePage";
import GamePage from "./page/GamePage";
import LightBlub from "./assets/images/LightBulb.png";
import "./api/hello";

const App: React.FC = () : ReactElement => {
  return (
    <>
      <section id="rootContainer">
        <section id="leftSection">
          <div id="profile">
            <img src={LightBlub} />
            <span>
              &quot;Life is about Direction&quot;
            </span>
            <hr/>
          </div>
          <div id="menu">
            <span>Category</span> 
            <hr/>
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/posungkim.github.io/game"> Welsh Corgi </Link></li>
              <li><Link to="/posungkim.github.io/chatbot"> Chatbot </Link></li>
            </ul>
          </div>
        </section>
        <section id="rightSection">
            <Routes>
              <Route path="/posungkim.github.io"           element={<HomePage/>}     />
              <Route path="/posungkim.github.io/game"      element={<GamePage />}    />
              <Route path="/posungkim.github.io/chatbot"   element={<ChatBotPage/>}  />
              <Route path="*"                              element={<HomePage />}    />
            </Routes>
        </section>
      </section>
      <footer>
      </footer>
    </>
  );
};

export default App;