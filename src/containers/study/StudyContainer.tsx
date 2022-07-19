import React, { useState } from "react";
import StudyContent from "../../components/study/StudyContent";
import Header from "../../components/common/Header";
import Main from "../../components/common/Main";

const StudyContainer = () => {
    
    // 0 : Study 보기
    // 1 : Study 추가
    const [status, setStatus] = useState<number>(0);
    const onAddHandler : React.MouseEventHandler<HTMLButtonElement> = (e : any) => {
        setStatus(status === 0 ? 1 : 0);
    }
    
    return (
        <div id="container">
            <Header title = "스터디" emoji="✨">
                <button id="button" onClick={onAddHandler}>{status === 0 ? 'ADD ➕' : 'Back ⏪' }</button>
            </Header>
            <Main>
                <StudyContent status={status}  />
            </Main>
        </div>
    )
    
}

export default StudyContainer;