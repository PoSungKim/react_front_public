import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ChatBotPage from "./page/ChatBotPage";
import HomePage from "./page/HomePage";
import GraphPage from "./page/GraphPage";
import FinancePage from "./page/FinancePage";
import GamePage from "./page/GamePage";
import LightBlub from "./assets/images/LightBulb.png";
import "./api/hello";


const App: React.FC = () : React.ReactElement => {
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
              <li><Link to="/graph"> Graph </Link></li>
              <li><Link to="/chatbot"> Chatbot </Link></li>
              <li><Link to="/finance"> Finance </Link></li>
              {/* <li><Link to="/posungkim.github.io/game"> Welsh Corgi </Link></li> */}
            </ul>
          </div>
        </section>
        <section id="rightSection">
            <Routes>
              <Route path="/"           element={<HomePage/>}     />
              <Route path="/graph"     element={<GraphPage />}    />
              <Route path="/chatbot"   element={<ChatBotPage/>}  />
              <Route path="/finance"   element={ <FinancePage  />} />
              {/* <Route path="/posungkim.github.io/game"      element={<GamePage />}    /> */}
              {/* <Route path="*"                              element={<HomePage />}    /> */}
            </Routes>
        </section>
      </section>
      <footer>
      </footer>
    </>
  );
};

export default App;