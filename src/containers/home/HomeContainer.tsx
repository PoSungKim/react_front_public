import React from "react";
import Header from "../../components/common/Header";
import Main from "../../components/common/Main";

const HomeContainer = () => {
    return (
        <div id = "container">
            <Header title="오늘의 소식" emoji="☀️" children={null} />            
            <Main children={null} />
        </div>
    )
}

export default HomeContainer;