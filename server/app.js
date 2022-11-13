// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
// app.use((req, res, next) => {
//   console.log('Body:', req.body);
//   next();
// });

// Get all the artists
app.get('/artists', (req, res) => {
  const allUsers = getAllArtists();
  res.statusCode = 200;
  res.contentType = 'application/json';
  res.send(allUsers);
});

// Add an artist
app.post('/artists', (req, res) => {
  const newUser = req.body;

  res.status(201);
  res.contentType = 'application/json';
  res.send(addArtist(newUser));
});

// Get the latest artist added
app.get('/artists/latest', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(getLatestArtist());
});

// Get all albums of the latest artist
app.get('/artists/latest/albums', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(getAlbumsForLatestArtist());
});


// Get a specific artist's details based on artistId
app.get('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  res.status(200);
  res.contentType('application/json');
  res.send(getArtistByArtistId(artistId));
});

// Edit a specified artist by artistId
app.put('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;

  res.status(200);
  res.contentType('application/json');
  res.send(editArtistByArtistId(artistId, req.body));
});

// Delete a specified artist by artistId
app.delete('/artists/:artistId', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  deleteArtistByArtistId(req.params.artistId);
  res.send({'message': "Successfully deleted"});
});

// Get all albums of a specific artist based on artistId
app.get('/artists/:artistId/albums', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(getAlbumsByArtistId(req.params.artistId));
});

// Get a specific album's details based on albumId
app.get('/albums/:albumId', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(getAlbumByAlbumId(req.params.albumId));
});

// Add an album to a specific artist based on artistId
app.post('/artists/:artistId/albums', (req, res) => {
  const newAlbum = req.body;

  res.status(201);
  res.contentType('application/json');
  res.send(addAlbumByArtistId(req.params.artistId, newAlbum));
});

// Edit a specified album by albumId
app.put('/albums/:albumId', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(editAlbumByAlbumId(req.params.albumId, req.body));
});

// Delete a specified album by albumId
app.delete('/albums/:albumId', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  deleteAlbumByAlbumId(req.params.albumId);
  res.send({message: "Successfully deleted"});
});

// Get all albums with names filtered by first letter
app.get('/albums', (req, res) => {
  const startLetter = req.query.startsWith;
  res.status(200);
  res.contentType('application/json');
  res.send(getFilteredAlbums(startLetter));
});

// Get all songs of a specific artist based on artistId
app.get('/artists/:artistId/songs', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(getSongsByArtistId(req.params.artistId));
});


// Get all songs of a specific album based on albumId
app.get('/albums/:albumId/songs', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(getSongsByAlbumId(req.params.albumId));
});

// Get a specific song's details based on songId
app.get('/songs/:songId', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(getSongBySongId(req.params.songId));
});

// Add a song to a specific album based on albumId
app.post('/albums/:albumId/songs', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(addSongByAlbumId(req.params.albumId, req.body));
});

// Edit a specified song by songId
app.put('/songs/:songId', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  res.send(editSongBySongId(req.params.songId, req.body));
});

// Delete a specified song by songId
app.delete('/songs/:songId', (req, res) => {
  res.status(200);
  res.contentType('application/json');
  deleteSongBySongId(req.params.songId);
  res.send({'message': "Successfully deleted"});
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
