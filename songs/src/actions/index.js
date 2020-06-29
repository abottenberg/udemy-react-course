export const selectSong = (song) => {
  // return and actions
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

