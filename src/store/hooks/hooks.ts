import { TypedUseSelectorHook, useDispatch, useSelector  } from 'react-redux';
import type {AppDispatch, RootState } from '../store';
import { SocketContext } from "../../contexts/web-socket-context";
import { useContext } from "react";

export const useSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;