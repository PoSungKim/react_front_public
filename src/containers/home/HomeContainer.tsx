import React, { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from "react";
import "../../assets/scss/home.scss";

var mapLoading = false;

const HomeContainer = () => {

    interface Cell {
        y: number;
        x: number;
    }

    const [colorMap, setColorMap] : [number[][], Dispatch<SetStateAction<number[][]>>] = useState([...new Array<number>(20)].map(x=>new Array<number>(20).fill(0)));

    const directions : Cell[] = [{y : -1, x : 0}, {y : 0, x : -1}, {y : 1, x : 0}, {y : 0, x : 1}];
    const startCell : Cell = {y : 0, x: 0};
    const endCell : Cell = {y : 3, x: 8};
    var myTimerTimeOutId: NodeJS.Timeout;

    const myTimer = (intervalTime : number) => (
        new Promise<void>( (res, rej) => {
            myTimerTimeOutId = setTimeout( () => res(), intervalTime)
        })
    )

    const dfs = async () => {
        mapLoading = true;

        var tmpMap : number[][] = [...colorMap];
        var idx = 0;
        const stack : Cell[] = []
        var visited : boolean[][] = [...new Array<boolean>(20)].map(x=>new Array<boolean>(20).fill(false));
        
        stack.push({y: 0, x: 0});
        while(stack.length > 0) {
            
            var curCell : Cell | undefined = stack.pop();
            if (curCell == undefined || visited[curCell.y][curCell.x]) continue;
            if (!mapLoading) break;
            if (curCell.y == endCell.y && curCell.x == endCell.x) break;

            tmpMap[curCell.y][curCell.x] = idx++;
            setColorMap(tmpMap);
            tmpMap = [...colorMap];
            await myTimer(10);

            visited[curCell.y][curCell.x] = true;

            for(var dir = 0; dir < 4; dir++) {
                const nY = curCell.y + directions[dir].y;
                const nX = curCell.x + directions[dir].x;

                if (nX < 0 || nY < 0 || 20 <= nX || 20 <= nY) continue;
                stack.push({y : nY, x : nX});
            }
        }
        mapLoading = false
    }

    const clearMap = () => {
        mapLoading = false;
        setColorMap([...new Array<number>(20)].map(x=>new Array<number>(20).fill(0)));
    }    

    const clickHandler = (e : React.FormEvent<HTMLDivElement>, fnc : Function) : void => {
        fnc()
    }
    
    return (
        <div id="homeContainer">
            <div id="header">
                <div className="menu" onClick={e=>{clickHandler(e, clearMap)}}>
                    <div className="button">clear the map</div> 
                </div>
                <div className="menu" onClick={e=>{clickHandler(e, dfs)}}>
                    <div className="button">DFS</div> 
                </div>
                <div className="menu">
                    <div className="button">BFS</div> 
                </div>
                <div className="menu">
                    <div className="button">Kruskal</div> 
                </div>
            </div>
            <div id ="table"> 
            {
                colorMap.map( (e, rIdx)=> {
                    return (
                        <div key = {rIdx} className = "row">
                            {
                                e.map( (e, cIdx) => {
                                    if (startCell.y == rIdx && startCell.x == cIdx) {
                                        return <div key = {`${rIdx} ${cIdx}`} className = "col start" >start</div>
                                    } else if (endCell.y == rIdx && endCell.x == cIdx) {
                                        return <div key = {`${rIdx} ${cIdx}`} className = "col end" >end</div>
                                    }
                                    return (e == 0) ? 
                                    <div key = {`${rIdx} ${cIdx}`} className = "col" >{e}</div> : 
                                    <div key = {`${rIdx} ${cIdx}`} className = "col checked" >{e}</div>
                                })
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default HomeContainer;