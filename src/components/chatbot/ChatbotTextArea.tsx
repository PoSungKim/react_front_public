import React from "react";

type Props = {
  textInput: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
};

const ChatBotTextArea = (props: Props) => {
  return (
    <form id="ChatBotTextArea" onSubmit={(e) => props.onSubmitHandler(e)}>
      <input
        autoComplete="off"
        type="text"
        id="TextArea"
        placeholder="Please Type Your Message"
        value={props.textInput}
        onChange={(e) => props.onChangeHandler(e)}
      />
      <button id="TextButton">전송</button>
    </form>
  );
};

export default React.memo(ChatBotTextArea);
