import { Socket, io } from "socket.io-client";

export const socket: Socket = io(
  "https://websockets-task.onrender.com/socket.io"
);
