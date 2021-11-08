import React from "react";

type Props = {
  message: string;
};

const ChatBox = (props: Props) => {
  return (
    <div className="ChatBox">
      <div className="ChatBoxContent">{props.message}</div>
    </div>
  );
};

export default React.memo(ChatBox);
