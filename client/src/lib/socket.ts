import { Socket, io } from "socket.io-client";

const WSUrl = import.meta.env.VITE_WS_URL;

export const socket: Socket = io(WSUrl);
