import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as userSignOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

export const signUpAsync = createAsyncThunk(
  'user/sign_up',
  async ({ email, password }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        email: user.providerData[0].email,
        refreshToken: user.stsTokenManager.refreshToken,
        accessToken: user.stsTokenManager.accessToken,
        expirationTime: user.stsTokenManager.expirationTime,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const signInAsync = createAsyncThunk(
  'user/sign_in',
  async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user.providerData[0];
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const signOutAsync = createAsyncThunk('user/sign_out', async () => {
  try {
    await userSignOut(auth);
    return;
  } catch (error) {
    throw new Error(error);
  }
});

export const authObserverAsync = createAsyncThunk(
  'user/auth_observer',
  async () =>
    new Promise((resolve, reject) => {
      const observeAuthState = onAuthStateChanged(auth, (user) => {
        observeAuthState();
        if (user) {
          resolve(user.providerData[0]);
        } else {
          resolve(false);
        }
      });
    })
);

const initialState = {
  userCredential: '',
  errorSignUp: '',
  errorSignIn: '',
  errorSignOut: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userCredential = action.payload.user;
    },
    setErrorSign: (state, action) => {
      state.errorSignUp = '';
      state.errorSignIn = '';
      state.errorSignOut = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.rejected, (state, { error }) => {
        state.errorSignUp = error.message.slice(25, 65); // at 0,25 => FirebaseError: Firebase:
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      })
      .addCase(signInAsync.rejected, (state, { error }) => {
        state.errorSignIn = error.message.slice(25, 65);
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      })
      .addCase(signOutAsync.rejected, (state, { error }) => {
        state.errorSignOut = error.message.slice(25, 65);
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      })
      .addCase(authObserverAsync.rejected, (state, { error }) => {
        state.errorSignOut = error.message.slice(25, 65);
      })
      .addCase(authObserverAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload ? action.payload : '';
      });
  },
});

export const { setUser, setErrorSign } = userSlice.actions;

export const selectUserCredential = (state) => state.user.userCredential;
export const selectErrorSignUp = (state) => state.user.errorSignUp;
export const selectErrorSignIn = (state) => state.user.errorSignIn;
export const selectErrorSignOut = (state) => state.user.errorSignOut;

export default userSlice.reducer;
