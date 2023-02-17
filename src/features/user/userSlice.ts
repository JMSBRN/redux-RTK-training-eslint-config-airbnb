import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface IInitialState {
  user: {
    name: string;
    email: string;
  };
}

const initialState: IInitialState = {
  user: {
    name: 'slice',
    email: 'slice',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
