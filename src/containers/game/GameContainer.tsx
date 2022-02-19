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

class GameManager {
    static moveList = ["translateX(50vw)", "translateX(50vw) translateY(50vh)", "translateX(10vw)translateY(50vh)", "translateX(10vw)"];
    static corgiList = [Corgi0, Corgi1, Corgi2, Corgi3, Corgi4, Corgi5, Corgi6, Corgi7, Corgi8];
    static cnt = 0;

    static getNextImg(): string {
        return `url(${this.corgiList[this.cnt % this.corgiList.length]})`;
    }

    static getNextMove(): string {
        return this.moveList[this.cnt % this.moveList.length];
    }

    static increaseStep(): number {
        this.cnt++;
        return this.cnt;
    }

    static debug(msg: string | number): void {
        console.log(msg);
    }

    constructor() {
    }
}

const GameContainer = () => {

    const addAction = () => {
        const GameContainer: HTMLElement | null = document.querySelector("#GameContainer");
        const GameIcon: HTMLElement | null = document.querySelector("#GameContainer main img");

        if (GameContainer === null || GameIcon === null) return;

        GameIcon.style.transform = GameManager.getNextMove();
        GameContainer.style.backgroundImage = GameManager.getNextImg();
        GameManager.increaseStep();
    }

    useLayoutEffect(() => {

        addAction();

        const myInterval = setInterval(
            addAction
            , 1500);

        return () => {
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