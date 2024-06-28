import { Socket, io } from "socket.io-client";

const WSUrl = import.meta.env.VITE_WS_URL;
const nodeEnvDev = import.meta.env.DEV;

export const socket: Socket = io(nodeEnvDev ? WSUrl : WSUrl);
