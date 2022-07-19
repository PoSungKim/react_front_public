import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ChatBotPage from "./page/ChatBotPage";
import HomePage from "./page/HomePage";
import GraphPage from "./page/GraphPage";
import FinancePage from "./page/FinancePage";
import GamePage from "./page/GamePage";
import LightBlub from "./assets/images/LightBulb.png";
import { getMenu } from "./api/menu";
import StudyPage from "./page/StudyPage";


const App: React.FC = () : React.ReactElement => {

  type Menu = {
    id: number;
    name : string;
    url : string;
  }

  const [menuList, setMenuList] = useState<Menu[]>([]);
  
  const getMenuList = async () => {
    const menuList = await getMenu();
    setMenuList(menuList);
  }

  useEffect( ()=> {
    getMenuList();
  }, []);

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
              {menuList.map(e=>
                <li key = {e.id}><Link to={e.url}> {e.name} </Link></li>
              )}
            </ul>
          </div>
        </section>
        <section id="rightSection">
            <Routes>
              <Route path="/"          element={<HomePage     />} />
              <Route path="/graph"     element={<GraphPage    />} />
              <Route path="/chatbot"   element={<ChatBotPage  />} />
              <Route path="/finance"   element={<FinancePage  />} />
              <Route path="/study"     element={<StudyPage    />} />
              {/* <Route path="/posungkim.github.io/game"      element={<GamePage />}    /> */}
              {/* <Route path="*"          element={<HomePage />}    /> */}
            </Routes>
        </section>
      </section>
      <footer>
      </footer>
    </>
  );
};

export default App;