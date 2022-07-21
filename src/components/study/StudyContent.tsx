import React from "react"
import { useState } from "react";
import ReactMarkDown from "react-markdown";

const StudyContent = (props: { status: number; }) => {
    const onSubmitHandler: React.FormEventHandler<HTMLFormElement>= (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const putFormInfo = async () => {
        // Logic will be added
    }

    const mainContentHandler = () => {
    
        {if (props.status === 0) {
            return (
                <>
                    <ReactMarkDown children={"## Study List\n"}/>
                </>
            )
        } else {
            return (
                <form id="StudyForm" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="title">제목</label>
                        <input type="text" id = "title" />
                    </div>
                    <div>
                        <label htmlFor="content">내용</label>
                        <textarea id="content" ></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit 🛎</button>
                    </div>
                </form>
            )
        }}
    }

    return (
        <>
            {mainContentHandler()}
        </>
    )
}

export default StudyContent;