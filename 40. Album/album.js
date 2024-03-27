function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Artist1", "Album Title 1");
let album2 = make_album("Artist2", "Album Title 2", 12);
let album3 = make_album("Artist3", "Album Title 3");
console.log(album1);
console.log(album2);
console.log(album3);
export {};
