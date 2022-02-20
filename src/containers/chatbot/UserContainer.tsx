import React, { useEffect, useState } from "react";
import ChatBotHeader from "../../components/chatbot/ChatBotHeader";
import { userListType } from "../../modules/reducers/UserReducer";


const UserContainer = (props : any) => {
    return (
        <div id = "UserContainer">
            <main>
                <div>User List : 
                    {props.userState.userList.map((e : {name : String, email : String}, idx : number) => (
                        <span key={idx}>{" " + e.name + ""}</span>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default UserContainer;