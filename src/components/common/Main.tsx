import React from "react"

type MainProps = { 
    children : React.ReactNode,
}

const Main = (props: MainProps) => {

    return (
        <main>
            {props.children}
        </main>
    )
}

export default Main;