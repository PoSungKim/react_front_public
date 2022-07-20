import React from "react"
import { useState } from "react";
import ReactMarkDown from "react-markdown";

const StudyContent = (props: { status: number; }) => {

    const mainContentHandler = () => {
    
        {if (props.status === 0) {
            return (
                <>
                    <ReactMarkDown children={"## Study List\n"}/>
                </>
            )
        } else {
            return (
                <form>
                    <input type="text" />
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                    <button type="submit">Submit</button>
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