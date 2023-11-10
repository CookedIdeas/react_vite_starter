import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

const defaultState = {
  user: {},
};

export function useUser() {
  return useSelector((state) => state.user);
}

export const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;

      state.user = user;

      // persistent data → store in local storage
      localStorage.setItem('user', JSON.stringify(state));

      // communicate with user
      toast.success('User info added');
    },
    clearUser: (state) => {
      state.user = {};
      toast('User info deleted');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
