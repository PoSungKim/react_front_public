import React, { useEffect } from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SOL from "../../assets/images/SOL.png";

const ChatBox = ({
  userName,
  content,
  type,
}: {
  userName: string;
  content: string;
  type: string;
}) => {
  useEffect(() => {
    const ChatBotMain = document.querySelector<HTMLDivElement>("#ChatBotMain");
    ChatBotMain?.scroll(0, ChatBotMain?.scrollHeight);
  });

  if (type == "L")
    return (
      <div className="ChatBox left">
        <div className="ChatBoxProfile">
          <AccountBoxIcon className="ChatBoxProfileImg" />
          <span className="ChatBoxProfileName">{userName}</span>
        </div>
        <div className="ChatBoxContent">{content}</div>
      </div>
    );
  else
    return (
      <div className="ChatBox right">
        <div className="ChatBoxContent">{content}</div>
        <div className="ChatBoxProfile">
          {userName === "SOL" ? (
            <img id="ChatBotImg" src={SOL} />
          ) : (
            <>
              <AccountBoxIcon className="ChatBoxProfileImg" />
              <span className="ChatBoxProfileName">{userName}</span>
            </>
          )}
        </div>
      </div>
    );
};

export default React.memo(ChatBox);
