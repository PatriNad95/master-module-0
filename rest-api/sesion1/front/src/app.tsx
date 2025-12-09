import React from "react";
import { Socket } from "socket.io-client";
import { createSocket } from "./api";

export const App = () => {
  const [message, setMessage] = React.useState<string>("");
  const [chatlog, setChatlog] = React.useState<string>("");
  const [isConnected, setIsConnected] = React.useState<boolean>(false);
  const [socket, setSocket] = React.useState<Socket>(null);
  const [nickname, setNickname] = React.useState<string>("");
  const [room, setRoom] = React.useState<string>("Front End");

  const establishSocketConnection = () => {
    const socketConnection = createSocket(nickname, room);
    setSocket(socketConnection);
    console.log("Establishing socket connection...");

    socketConnection.on("message", (body) => {
      if (body && body.type) {
        switch (body.type) {
          case "CONNECTION_SUCCEDED":
            setIsConnected(true);
            console.log("Connection succeeded");
            break;
          case "CHAT_MESSAGE":
            setChatlog(
              (prev) =>
                `${prev}\n${body.payload.nickname}: ${body.payload.content}`
            );
            break;
          case "NICKNAME_USED":
            alert(
              `Nickname ${nickname} already in use. Please choose another one.`
            );
            setNickname("");
            socketConnection.disconnect();
            break;
        }
      }
    });
  };

  const handleConnect = () => {
    if (!isConnected) {
      establishSocketConnection();
    }
  };

  const sendMessage = (content: string, all: boolean) => {
    setChatlog((prev) => `${prev}\nMe: ${content}`);
    socket.emit("message", { type: "CHAT_MESSAGE", payload: { content, all } });
    setMessage("");
  };

  return (
    <>
      <label>Enter Nickname:</label>
      <input
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        disabled={isConnected}
      />
      <label>Select room:</label>
      <select
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        disabled={isConnected}
      >
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
        <option value="DevOps">DevOps</option>
        <option value="General">General</option>
      </select>
      <button onClick={handleConnect} disabled={isConnected}>
        Join
      </button>
      {isConnected && (
        <div style={{ marginTop: "40px" }}>
          <label>Message:</label>
          <input
            style={{ width: "80%" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={(e) => sendMessage(message, false)}>Send</button>
          <button onClick={(e) => sendMessage(message, true)}>
            Send All Channels
          </button>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>ChatLog</label>
            <textarea
              style={{ height: "400px" }}
              value={chatlog}
              onChange={(e) => setChatlog(e.target.value)}
              readOnly
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
};
