import { createSlice, createSelector, PayloadAction, current } from '@reduxjs/toolkit';
import { RootState } from '../store';


type GameState = {
  map: string[];
  status: string;
};

const initialState: GameState = {
  map: [],
  status: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setMap(state, action: PayloadAction<string>) {
      if (action.payload) {
        state.map = action.payload.split('\n').filter((row: string[] | string) => !!row.length);
      }
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    }
  },
});

const { setMap, setStatus } = gameSlice.actions;

const unsafeSelector = (state: RootState) => state.game;
const mapSelector = createSelector(unsafeSelector, (state: GameState) => state.map);
const statusSelector = createSelector(unsafeSelector, (state: GameState) => state.status);

export { setMap, setStatus, mapSelector, statusSelector };
export default gameSlice.reducer;
