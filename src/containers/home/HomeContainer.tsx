import React, { useState } from "react";

const HomeContainer = () => {

    const [colorMap, setColorMap] = useState([...Array(20)].map(x=>Array(20).fill(0)));

    console.log(colorMap);
    
    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", flex: '1'}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
                    dfs
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
                    bfs
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
                    kruskal
                </div>
            </div>
            <div style={{display : "table", width: "100%", height: "100%", flex: '9', borderCollapse: "collapse"}}> 
            {
                colorMap.map( (e, idx)=> {
                    return (
                        <div key = {idx} style={{display: "table-row"}}>
                            {
                                e.map( (e, idx) => (
                                    <div key = {idx} style={{display : "table-cell", backgroundColor: "white", border: "black solid"}} >{'0'}</div>
                                ))
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