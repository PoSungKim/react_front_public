import React, { useEffect, useLayoutEffect } from "react";
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

class Game {
    static moveList = ["translateX(600px)", "translateX(600px) translateY(600px)", "translateY(600px)", ""]
    static corgiList = [Corgi0, Corgi1, Corgi2, Corgi3, Corgi4, Corgi5, Corgi6, Corgi7, Corgi8];
    static cnt = 0;
}

const GameContainer = () => {

    const addAction = () => {
        const GameContainer : HTMLElement | null = document.querySelector("#GameContainer");
        const GameIcon : HTMLElement | null = document.querySelector("#GameContainer main img");

        if (GameContainer === null || GameIcon === null) return;
            
        GameIcon.style.transform = Game.moveList[Game.cnt % 4];
        GameContainer.style.backgroundImage = `url(${Game.corgiList[Game.cnt++ % 9]})`;
    }

    useLayoutEffect( ()=> {

        console.log("useEffect start!");
        
        addAction()

        const myInterval = setInterval( 
            addAction
        , 1500);

        return () => {
            console.log("useEffect end!");
            clearInterval(myInterval);
        };
        
    }, []);

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