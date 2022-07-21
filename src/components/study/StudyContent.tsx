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
                            <input placeholder="제목" type="text" id = "title" />
                        </div>
                        <div>
                            <textarea placeholder="내용" id="content" ></textarea>
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