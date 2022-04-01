import { createContext, ReactChild } from 'react';
import { URL } from '../constants/app.constants';

const ws = new WebSocket(URL);

export const SocketContext = createContext(ws);

interface ISocketProvider {
  children: ReactChild;
}

const SocketProvider = ({ children }: ISocketProvider) => (
  <SocketContext.Provider value={ws}>{children}</SocketContext.Provider>
);

export default SocketProvider;
