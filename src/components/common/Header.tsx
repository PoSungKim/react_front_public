import React from "react"

type HeaderProps = {
    title : string,
    emoji : string,
    children : React.ReactNode,
}

const Header = (props: HeaderProps) => {

    return (
        <header>
            <span>{props.emoji} {props.title}</span>
            <br />
            <br />
            {props.children}
        </header>
    )
}

export default Header;