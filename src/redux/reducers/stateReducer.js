import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: null,
  loadedSong: null,
  favourite: [],
  playlist: [],
};

const stateReducerSlice = createSlice({
  name: "stateReducerSlice",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setLoadedSong: (state, action) => {
      state.loadedSong = action.payload;
    },
    addFavourite: (state, action) => {
      state.favourite = [...state.favourite, action.payload];
    },
    removeFavourite: (state, action) => {
      state.favourite = state.favourite.filter((song) => song !== parseInt(action.payload));
    },
    addToPlaylist: (state, action) => {
      if (!Array.isArray(state.playlist)) {
        state.playlist = [];
      }

      state.playlist = [...state.playlist, action.payload];
    },
    removeFromPlaylist: (state, action) => {
      state.playlist = state.playlist.filter((song) => song.id !== parseInt(action.payload.id));
    },
  },
});

export const { setSearchResult, addFavourite, removeFavourite, addToPlaylist, removeFromPlaylist, setLoadedSong } =
  stateReducerSlice.actions;
export default stateReducerSlice.reducer;
