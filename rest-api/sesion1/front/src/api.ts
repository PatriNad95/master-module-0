import { io, ManagerOptions, Socket, SocketOptions } from "socket.io-client";

export const baseSocketUrl = "http://localhost:3000";

export const createSocket = (nickname: string, room: string): Socket => {
  const options: Partial<ManagerOptions & SocketOptions> = {
    query: { nickname, room },
    timeout: 60000,
  };
  return io(baseSocketUrl, options);
};
