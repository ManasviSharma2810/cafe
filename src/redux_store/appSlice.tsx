import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  hasSeenTutorial: boolean;
  isLoggedIn: boolean;
}

const initialState: AppState = {
  hasSeenTutorial: false, 
  isLoggedIn: false,      
};


const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Action to set the tutorial as seen
    setHasSeenTutorial(state) {
      state.hasSeenTutorial = true;
    },
    // Action to log the user in
    setLogin(state) {
      state.isLoggedIn = true;
    },
    // Action to log the user out
    setLogout(state) {
      state.isLoggedIn = false;
    },
  },
});


export const { setHasSeenTutorial, setLogin, setLogout } = appSlice.actions;


export default appSlice.reducer;
