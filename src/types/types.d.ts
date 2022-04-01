declare type BaseAction = {
  type: string;
  payload?: any;
};

declare type NewGameAction = {
  socket: WebSocket;
  level: string;
};
