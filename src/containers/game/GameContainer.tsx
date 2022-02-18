import React, { useEffect } from "react";
import Corgi from "../../assets/images/Corgi.png";
import Corgi0 from "../../assets/images/Corgi2.png";
import Corgi1 from "../../assets/images/Corgi3.png";
import Corgi2 from "../../assets/images/Corgi4.png";
import Corgi3 from "../../assets/images/Corgi5.png";
import Corgi4 from "../../assets/images/Corgi6.png";
import Corgi5 from "../../assets/images/Corgi7.png";
import Corgi6 from "../../assets/images/Corgi8.png";
import Corgi7 from "../../assets/images/Corgi9.png";
import Corgi8 from "../../assets/images/Corgi10.png";

var corgiList = [Corgi0, Corgi1, Corgi2, Corgi3, Corgi4, Corgi5, Corgi6, Corgi7, Corgi8];
var moveList = ["translateX(600px)", "translateX(600px) translateY(600px)", "translateY(600px)", ""]
var cnt = 0;

const GameContainer = () => {

    useEffect( ()=> {
        const GameContainer : HTMLElement | null = document.querySelector("#GameContainer");
        const GameIcon : HTMLElement | null = document.querySelector("#GameContainer main img");
        if (GameContainer === null || GameIcon === null) return;
        
        GameIcon.style.transform = moveList[cnt % 4];
        GameContainer.style.backgroundImage = `url(${corgiList[cnt++ % 9]})`;
        
        setInterval( ()=> {
            GameIcon.style.transform = moveList[cnt % 4];
            GameContainer.style.backgroundImage = `url(${corgiList[cnt++ % 9]})`;
        }, 1500);

    });

    return (
        <div id="GameContainer">
            <header>
                Welsh Corgi Land
            </header>
            <main>
                <img src={Corgi} />
            </main>
        </div>
    )
}

export default GameContainer;